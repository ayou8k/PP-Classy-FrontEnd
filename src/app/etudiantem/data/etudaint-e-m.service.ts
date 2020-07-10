import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudaintEM<T> {
  class =1
  studentid="F137318699"
  EmModel = 'classes/' + this.class + "/element_modules?projection=em";
  Devoir = 'noteDevoirs/' + this.class + "/element_modules?projection=em";
  BASE_URL = 'http://localhost:8080/';
  private etudiantid="F137318699";

  constructor(public http: HttpClient) {

  }
  getClasse(){
    let EtudiantModel = 'etudiants/' + this.etudiantid + "?projection=et";
    return this.http.get(this.BASE_URL+EtudiantModel)
  }
  all(): any {
    return this.http.get(this.getUrl());
  }
  getUrl() {

    return `${this.BASE_URL}${this.EmModel}`;
  }
  private getUrlId(id: any) {

    return `${this.getUrl()}/${id}`;
  }

  getPaginatorUrl(index: number, page_size: number) {
    console.log(`${this.BASE_URL}${this.EmModel}&page=${index}&size=${page_size}`)
    return `${this.BASE_URL}${this.EmModel}&page=${index}&size=${page_size}`;
  }


  getByPage(index: number, searchTerm: string, page_size: number): Observable<any> {

    if (searchTerm.trim().length > 0)
      this.all();

    else
      return this.http.get<any>(this.getPaginatorUrl(index, page_size));
  }

  // getById(id: string) {
  //
  //   return this.http.get(this.getUrlId(id));
  // }



}
