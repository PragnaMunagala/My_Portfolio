import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css', '../../app.component.css']
})
export class ExperienceComponent implements OnInit {
  exp = [
    {
      name: 'Angular Development Intern at AdviNOW Medical',
      location: 'Scottsdale, Arizona',
      duration: 'February 2018 - present',
      responsibilities: [
        'Develop modules for automating healthcare applications using Angular 4',
        'Implement Redux with Angular which provides a predictable state container and Sass for styling the application',
        'Unit testing the applications using Karma, Jasmine frameworks',
        'Maintain the integrity of the user data in production database',
        'Ensure the quality of code, using unit and integration tests and continuous integration',
      ]
    },
    {
      name: 'Front End Team Lead at Cyber Security Lab',
      location: 'Arizona State University, Tempe',
      duration: 'January 2017 - February 2018',
      responsibilities: [
        'Developed login, two factor authentication, routing, services and interceptors for Cyr3con screen',
        'Migrated entire front end framework from Laravel to Angular 4 within 2 months',
        'Developed modules like vulnerability analysis, recent data, search and detail views of Cyr3con screen',
        'Lead a team of 9 members, by driving design discussion sessions with UX and backend teams',
        'Come up with acceptable project release deadlines by constant estimation of number of hours available for team',
        'Ensure all the code checkins made by the team strictly follow coding standards'
      ]
    },
    {
      name: 'Software Developer at Campus Health Solutions',
      location: 'Arizona State University, Phoenix',
      duration: 'August 2016 - March 2017',
      responsibilities: [
        'Developed grant management and student placement modules for ASU student portal using AngularJS, MVC .NET and HTML'
      ]
    },
    {
      name: 'Business Technology Analyst at Deloitte Consulting LLP',
      location: 'Hyderabad, India',
      duration: 'January 2015 - July 2016',
      responsibilities: [
        'Developed and integrated player, club and course modules for U.S. Golf Association using AngularJS and ASP .NET MVC',
        'Integrated the Adobe Experience Manager (AEM) components for Roche and Deloitte University Press projects using HTML5, CSS3, ' +
        'Bootstrap, JavaScript, JQuery and Sightly',
        'Received intensive training on .NET, HTML and CSS for a month'
      ]
    },
    {
      name: 'Software Developer Intern at Trendy Works Pvt Ltd',
      location: 'Hyderabad, India',
      duration: 'September 2014 - December 2014',
      responsibilities: [
        'Developed mathematics and science modules for www.smartur.com using C# in Adobe Flash Player',
        'Integrated the selfie functionality with virtual celestial bodies using Unity3D game engine'
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
