import { Component, OnInit } from '@angular/core';
import {EtudaintEM} from'../../data/etudaint-e-m.service'
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-etudiantem-add',
  templateUrl: './forumcours-add.component.html',
  styleUrls: ['./forumcours-add.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class ForumcoursAddComponent implements OnInit {
  currentAU: any;
  originalName;
  title: string = 'Annee Universitaire';

  constructor(
    private auService: EtudaintEM<any>,
    private location: Location
  ) {
  }
  create(filiere) {
    // this.auService.create(filiere)
    //   .subscribe(
    //     (result) =>{
    //       this.resetAu();
    //       this.location.back();
    //     }
    //   );
  }

  ngOnInit(): void {
  }

}
