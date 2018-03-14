import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', '../../app.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      category: 'Machine Learning',
      project: [
        {
          title: 'Team Performance Predictor',
          desc: ['test', 'test']
        },
        {
          title: 'Image classification using KNN',
          desc: ['test', 'test']
        }
      ],
      show: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  selectedRow(item) {
    this.projects[item].show = !this.projects[item].show;
  }

}
