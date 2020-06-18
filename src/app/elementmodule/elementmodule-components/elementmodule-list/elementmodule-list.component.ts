import {Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {Observable} from 'rxjs';
import {ElementmoduleService} from'../../data/elementmodule.service'


@Component({
  selector: 'app-elementmodule-list',
  templateUrl: './elementmodule-list.component.html',
  styleUrls: ['./elementmodule-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ElementmoduleListComponent implements OnInit {

  nombre_pages = 13;//nombre elemets
  page_index = 0;
  page_size = 2;
  searchTerm: string = '';

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  dataSource$: Observable<any>;
  columnsToDisplay = ['id', 'prenom', 'nom', 'email', 'tel'];
  expandedElement: any | null;

  constructor(private elementservice: ElementmoduleService) { }

  ngOnInit(): void {
    this.getDataSource();

  }

  private getDataSource() {
    this.elementservice.getByPage(0, '', this.page_size).subscribe(data => {
      this.dataSource$ = data._embedded.publication_Courses;
      // this.nombre_pages = data.page.totalElements;
      console.log(this.dataSource$)
    }, error => {
      console.log(error);
    });

  }
  changePage(event: PageEvent) {
    // this.dataSource$ =;
    this.elementservice.getByPage(event.pageIndex, this.searchTerm, event.pageSize).subscribe(data=>{

      this.dataSource$=data._embedded.etudiants;
    },error => {
      console.log(error);
    });

  }
  search(term: KeyboardEvent) {
    // this.dataSource$ =
    this.elementservice.search(this.page_index, this.page_size, this.searchTerm).subscribe(data=>{
      this.dataSource$=data._embedded.etudiants;
    },error => {
      console.log(error);
    });

  }
}
