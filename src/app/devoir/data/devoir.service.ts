import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DevoirService {
  model = 'noteDevoirs';
  BASE_URL = 'http://localhost:8080/';
  idStudent="F137318699"
  constructor(    private httpClient: HttpClient) { }

  getUrl() {
    return  `${this.BASE_URL}${this.model}`;
  }
  getByPage(index: number, page_size: number) {

      return this.httpClient.get<any>(this.getPaginatorUrl(index, page_size));
  }
  private getUrlId(id: any) {
    return `${this.getUrl()}/${id}`;
  }
  delete(devoirId) {
    return this.httpClient.delete(this.getUrlId(devoirId))
  }
  getPaginatorUrl(index: number, page_size: number){
    index++;
    console.log(`${this.BASE_URL}${this.model}`)
    return  `${this.BASE_URL}${this.model}`;
  }
  getPaginatorSearchURL(index: number, page_size: number, searchTerm: string){
    index++;
    return  `${this.BASE_URL}${this.model}?q=${searchTerm}&_page=${index}&_limit=${page_size}`;

  }
  create(devoir: any) {
    return this.httpClient.post(this.getUrl(), devoir)
  }
  getById(id: number) {
    return this.httpClient.get(this.getUrlId(id));
  }

  getDevoir(iddev: number) {
    console.log(`${this.BASE_URL}${this.model}`+"/"+iddev+"/"+this.idStudent)
    return this.httpClient.get<any>(`${this.BASE_URL}${this.model}`+"/"+iddev+"/"+this.idStudent);
  }
}
