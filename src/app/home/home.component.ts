import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css']
})
export class HomeComponent implements OnInit {
  items = [
    {name: 'About', url: '/home', cls: 'btn btn-primary'},
    {name: 'Experience', url: '/experience', cls: 'btn btn-primary'},
    {name: 'Skills', url: '/skills', cls: 'btn btn-primary'},
    {name: 'Projects', url: '/projects', cls: 'btn btn-primary'}
  ];

  toDisplay = 'home';

  constructor(public router: Router) { }

  ngOnInit() {
  }

  routingApp(url, name) {
    switch (name) {
      case 'Experience':
        this.toDisplay = 'exp';
        this.router.navigateByUrl(url);
        break;
      case 'Skills':
        this.toDisplay = 'skills';
        this.router.navigateByUrl(url);
        break;
      case 'Projects':
        this.toDisplay = 'prjct';
        this.router.navigateByUrl(url);
        break;
      default:
        this.toDisplay = 'home';
        this.router.navigateByUrl('/home');
    }
  }
}
