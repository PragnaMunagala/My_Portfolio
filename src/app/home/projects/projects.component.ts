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
          title: 'Image classification using K-Nearest Neighbor',
          desc: ['test', 'test']
        }
      ],
      show: false
    },
    {
      category: 'Android Programming',
      project: [
        {
          title: 'BraiNet Application',
          desc: ['test', 'test']
        },
        {
          title: 'Health Monitor Application',
          desc: ['test', 'test']
        }
      ],
      show: false
    },
    {
      category: 'Software Security',
      project: [
        {
          title: 'Secure Banking Application',
          desc: ['test', 'test']
        }
      ],
      show: false
    },
    {
      category: 'Linux Kernel - Device Driver development',
      project: [
        {
          title: 'I2C',
          desc: ['test', 'test']
        },
        {
          title: 'SPI',
          desc: ['test', 'test']
        },
        {
          title: 'Real time',
          desc: ['test', 'test']
        }
      ],
      show: false
    },
    {
      category: 'Computer Architecture',
      project: [
        {
          title: 'Cache',
          desc: ['test', 'test']
        },
        {
          title: 'Jump',
          desc: ['test', 'test']
        }
      ],
      show: false
    },
    {
      category: 'Digital Image and Video Processing',
      project: [
        {
          title: 'Image Filtering',
          desc: ['test', 'test']
        },
        {
          title: 'Android Application - Image',
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
    for (let i = 0; i < this.projects.length; i++) {
      if (i !== item) {
        this.projects[i].show = false;
      }
    }
  }
}
