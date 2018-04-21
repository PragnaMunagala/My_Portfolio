import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css', '../../app.component.css']
})
export class SkillsComponent implements OnInit {
  skillset = [
    {name: 'Front-end technologies', tech: ['HTML', ' CSS', ' JavaSript', ' JQuery', ' Angular 2+', ' AngularJS', ' React.js', ' Redux', ' Bootstrap', ' PHP', ' Laravel', ' Sightly']},
    {name: 'Programming Languages', tech: ['C', ' Python', ' C++', ' Java', ' Android', ' OpenCV', ' Adobe Experience Manager(AEM)']},
    {name: 'Other Development', tech: ['Machine Learning', ' Linux Kernel', ' Bash Scripting', ' Device Driver Implementation']},
    {name: 'Operating Systems', tech: ['Windows', ' Linux', ' Zephyr']},
    {name: 'Databases', tech: ['MySQL', ' Postgres', ' Hadoop', ' Apache Spark']},
    {name: 'Tools', tech: ['Microsoft Visual Studio 2015', ' WebStorm', ' Sublime', ' Pycharm', ' Git', ' Jira']}
  ];

  constructor() { }

  ngOnInit() {
  }

}
