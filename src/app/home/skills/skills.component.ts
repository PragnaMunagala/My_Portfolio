import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css', '../../app.component.css']
})
export class SkillsComponent implements OnInit {
  skillset = [
    {name: 'Front-end technologies', tech: ['HTML', ' CSS', ' JavaScript', ' Angular 2+', ' AngularJS', ' React.js', ' Redux',
        ' Bootstrap', ' JQuery', ' Sass', ' PHP', ' Laravel', ' Sightly']},
    {name: 'Programming Languages', tech: ['C', ' Python', ' C++', ' Java', ' Android', ' OpenCV', ' Adobe Experience Manager(AEM)']},
    {name: 'Operating Systems', tech: ['Windows', ' Linux', ' Zephyr']},
    {name: 'Databases', tech: ['MySQL', ' Postgres', ' Hadoop', ' Apache Spark']},
    {name: 'Other Development', tech: ['Machine Learning', ' Linux Kernel', ' Bash Scripting', ' Device Driver Implementation']}
  ];

  constructor() { }

  ngOnInit() {
  }

}
