import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {DevoirService} from "../../data/devoir.service";
import {Location} from '@angular/common';
import {Devoir} from "../../data/devoir";
import {DevoirSend} from "../../data/devoirsend";

@Component({
  selector: 'app-devoir-add',
  templateUrl: './devoir-add.component.html',
  styleUrls: ['./devoir-add.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])]
})
export class DevoirAddComponent implements OnInit {
  currentDevoir: DevoirSend;
  title="Devoirs"
  devoirid
  studentid="F137318699"
  constructor(private devoirService: DevoirService, private route: ActivatedRoute,private location: Location) { }

  ngOnInit(): void {
    // this.getDataSource();
    this.resetDevoir()
    let id = +this.route.snapshot.paramMap.get('id');
    this.devoirid=id
    //getidofstudent from local storage

  }
  getDataSource() {
    let id = +this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.devoirid=id
    this.devoirService.getDevoir(id).subscribe(data => {
      this.currentDevoir=data;
      this.currentDevoir.dateSoumission=new Date(data.dateSoumission).toISOString().split("T")[0]
      // this.currentDevoir.heureSoumission=new Date(data.dateSoumission).toISOString().split("T")[1].split(".")[0]
      console.log(this.currentDevoir)
    },error => {
      console.log(error)
    })
  }
  createDevoir(devoir) {
    console.log(devoir)
    devoir.etudiant="http://localhost:8080/etudiants/"+devoir.etudiant
    devoir.devoir="http://localhost:8080/publication_Devoirs/"+devoir.devoir
    this.devoirService.create(devoir)
      .subscribe(
        (result) =>{
          this.resetDevoir();
          this.location.back();
        }
      );
  }


  resetDevoir() {
    this.currentDevoir = {
      devoir: null,
      etudiant: '',
      note : null,
      pieces_jointes: '',
      dateSoumission:null,
    };
  }



  cancel() {
    this.resetDevoir();
    this.location.back();
  }


}
