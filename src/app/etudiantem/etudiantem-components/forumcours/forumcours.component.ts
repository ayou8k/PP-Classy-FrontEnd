import { Component, OnInit } from '@angular/core';
import {EtudaintEM} from'../../data/etudaint-e-m.service'
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-etudiantem-add',
  templateUrl: './forumcours.component.html',
  styleUrls: ['./forumcours.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class ForumcoursComponent implements OnInit {
  rows = [];
  // groupe: Object[] = [];
  page_size = 2;
  index=0;
  element='';
  module='';
  coef='';
  prof='';
  color= '';
  upcoming_devoirs=[];
  x:any

  constructor(private etudem: EtudaintEM<any>, private route: ActivatedRoute) {
  }
  getDataSource() {
    this.etudem.getByPage(0, '', this.page_size).subscribe(data => {
      let id = +this.route.snapshot.paramMap.get('id');
      data._embedded.element_modules.forEach((value,index)=>{
        if(value.id==id){
          this.index=index;
          this.color= 'lightblue';
          this.element=value.designation;
          this.coef=value.coeficient;
          this.prof=value.professeur.nom+" "+value.professeur.prenom;
          this.module=value.module.designation;
        }
      })
      this.Ultimate2(data._embedded.element_modules[this.index].publication_Cours,"cours")
      this.Ultimate2(data._embedded.element_modules[this.index].publication_Devoirs,"devoir")
      this.Ultimate2(data._embedded.element_modules[this.index].publication_Projets,"projet")
      this.AfterDate(data._embedded.element_modules[this.index].publication_Devoirs)

      this.rows.sort((a: any, b: any) => {
        return (new Date(a.datePublication)).getTime() - (new Date(b.datePublication)).getTime();
      });

    }, error => {
      console.log(error);
    });

  }
  ngOnInit(): void {
    this.getDataSource();

  }

/*  private groupEm(element_modules: any) {
    element_modules.forEach((value, index) => {
      console.log(element_modules.type)
      value.type="BULLSHIT"
      this.groupe.push(value);
      console.log(value)
      console.log(typeof value)

      if (index == 1) {
        this.rows.push(this.groupe);
        this.groupe = [];
      }
    });
  }
  private Ultimate(element_modules: any,type: string) {
    console.log("test"+Object.values(element_modules).length);
    element_modules.forEach((value, index) => {
      // console.log(element_modules.type)
      value.type=type
      this.groupe.push(value);
      // console.log(value)
      // console.log(typeof value)
      if (((index)%3)==0) {
        this.rows.push(this.groupe);
        this.groupe = [];
      }
      else if ((index+1)==Object.values(element_modules).length){
        console.log(Object.values(element_modules).length);
        this.rows.push(this.groupe);
        this.groupe = [];
      }
    });
  }*/
  private Ultimate2(element_modules: any,type: string) {
    element_modules.forEach((value) => {
      value.type=type
      if(type=="devoir"){

      }
      this.rows.push(value);
    });
  }

  private AfterDate(publication_Devoirs: any) {

    publication_Devoirs.forEach((value) => {
      let date=new Date()
let x=this.dateDiff(date.toISOString(),value.durreeDevoir)
      // let Timediff x=this.dateDiff(date.toISOString(),value.durreeDevoir)
      if(x.diff>0) {
        value.time=x
        this.upcoming_devoirs.push(value)
      }
      });
  }

  private nonsubmitted(publication_Devoirs){
    publication_Devoirs.forEach((value) => {
      value;
    })

    }
  private dateDiff( str1, str2 ) :any {
    var diff = Date.parse( str2 ) - Date.parse( str1 );
    return isNaN( diff ) ? NaN : {
      diff : diff,
      ms : Math.floor( diff            % 1000 ),
      s  : Math.floor( diff /     1000 %   60 ),
      m  : Math.floor( diff /    60000 %   60 ),
      h  : Math.floor( diff /  3600000 %   24 ),
      d  : Math.floor( diff / 86400000        )
    };
  }
}
