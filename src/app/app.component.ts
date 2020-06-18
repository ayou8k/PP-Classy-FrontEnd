import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Students';


    links = [
    { path: '/', icon: 'home', title: 'Home'},
    { path: 'etudiantem', icon: 'category', title: 'elements module'},
    // { path: 'etudiantem', icon: 'category', title: 'msamen'},
    // { path: '/customers', icon: 'face', title: 'Customer'},
    // { path: '/projects', icon: 'work', title: 'Projects'},
  ]
}
