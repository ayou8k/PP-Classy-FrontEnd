import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {Observable} from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {EtudaintEM} from'../../data/etudaint-e-m.service'

@Component({
  selector: 'app-etudiantem-list',
  templateUrl: './etudiantem-list.component.html',
  styleUrls: ['./etudiantem-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
    ]
})
export class EtudiantemListComponent implements OnInit {

  nombre_pages = 13;//nombre elemets
  page_index = 0;
  page_size = 2;
  searchTerm: string = '';
  rows = [];
  groupe: Object[] = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private etudem: EtudaintEM<any>) {

  }

  ngOnInit(): void {
    // this.etudem.class=2
    this.etudem.getClasse().subscribe((data:any)=> {
      let classe = data.classe.id
      console.log("la classe est "+classe)
      this.etudem.EmModel = 'classes/' + classe + "/element_modules?projection=em"
      this.getDataSource();

      console.log(this.etudem.EmModel + "dela7")
    })



  }

  getDataSource() {

    this.etudem.getByPage(0, '', this.page_size).subscribe(data => {
      this.groupEm(data._embedded.element_modules)

    }, error => {
      console.log(error);
    });

  }

  private groupEm(element_modules: any) {
    element_modules.forEach((value, index) => {
      this.groupe.push(value);

      if ((index+1)%2==0) {
        this.rows.push(this.groupe);
        this.groupe = [];
      }
    });
  }
  changePage(event: PageEvent) {
    this.rows=[]
    this.groupe=[]
    this.etudem.getByPage(event.pageIndex, '', event.pageSize).subscribe(
      (resp) => {
        // this.nombre_pages = resp.page.totalElements;
        this.groupEm(resp._embedded.element_modules)
      }
    );

  }
}
