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
    this.getDataSource();

  }

  getDataSource() {
    // this.dataSource$ = ;
    this.etudem.getByPage(0, '', this.page_size).subscribe(data => {
      // this.nombre_pages = data.page.totalElements;
      console.log(data._embedded.element_modules)

      this.groupEm(data._embedded.element_modules)

    }, error => {
      console.log(error);
    });

  }

  private groupEm(element_modules: any) {
    element_modules.forEach((value, index) => {
      this.groupe.push(value);
      console.log(value)

      if (index == 2) {
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
        console.log(resp._embedded.element_modules)
        this.groupEm(resp._embedded.element_modules)
      }
    );

  }
}
