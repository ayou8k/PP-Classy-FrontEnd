import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayoub-design',
  templateUrl: './ayoub-design.component.html',
  styleUrls: ['./ayoub-design.component.css']
})
export class AyoubDesignComponent implements OnInit {

  divs;

  constructor() { }

  ngOnInit(): void {
    this.divs  = new Array(10);
    console.log(this.divs);
  }

}
