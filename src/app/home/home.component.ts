import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css']
})
export class HomeComponent implements OnInit {
  toDisplay = 'home';

  constructor(public router: Router) { }

  ngOnInit() {
    if (this.router.url.includes('experience')) {
      this.toDisplay = 'exp';
    } else if (this.router.url.includes('skills')) {
      this.toDisplay = 'skills';
    } else if (this.router.url.includes('projects')) {
      this.toDisplay = 'prjct';
    } else if (this.router.url.includes('achievements')) {
      this.toDisplay = 'achievements';
    }
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
      case 'Resume':
        window.open(url);
      default:
        this.toDisplay = 'home';
        this.router.navigateByUrl('/home');
    }
  }
}
