import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudaintEM<T> {
  classe = 2
  model = 'classes/' + this.classe + "/element_modules?projection=em";
  BASE_URL = 'http://localhost:8080/';

  constructor(public http: HttpClient) {

  }

  all(): any {
    console.log('all');
    return this.http.get(this.getUrl());
  }

  getUrl() {
    return `${this.BASE_URL}${this.model}`;
  }

  private getUrlId(id: any) {
    return `${this.getUrl()}/${id}`;
  }

  getPaginatorUrl(index: number, page_size: number) {
    // index++;
    console.log(`${this.BASE_URL}${this.model}&page=${index}&size=${page_size}`);
    return `${this.BASE_URL}${this.model}&page=${index}&size=${page_size}`;
  }

  getPaginatorSearchURL(index: number, page_size: number, searchTerm: string) {
    // index++;
    return `${this.BASE_URL}${this.model}&q=${searchTerm}&page=${index}&size=${page_size}`;


  }
  getByPage(index: number, searchTerm: string, page_size: number): Observable<any> {
    if (searchTerm.trim().length > 0)
      this.all();

    else
      return this.http.get<any>(this.getPaginatorUrl(index, page_size));
  }

  getById(id: string) {
    return this.http.get(this.getUrlId(id));
  }

  search(index: number, page_size: number, searchTerm: string) {
    console.log(this.getPaginatorSearchURL(index,page_size,searchTerm));
    return this.http.get<any>(this.getPaginatorSearchURL(index, page_size, searchTerm));
  }

}
