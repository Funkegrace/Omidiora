import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {

  image1: string = '/assets/images/open.svg';
  image2: string = '/assets/images/open .svg';

  panelOpenState = false;
  experience = [
    {
      year: '2021- Present',
      companyName: 'Revent Technologies',
      jobRole:
        'I work as a product design team lead/ illustrator. I specialize in designing data management solution',
    },

    {
      year: '2020',
      companyName: 'Hotel NG',

      jobRole:
        'UIUX intern, I collaborated with other design and developer interns to create intuitive, user friendly software and websites',
    },

    {
      year: '2019-2020',
      companyName: 'Freelancer',
      jobRole:
        'Design intern and social media / content developer for Perxels.Brand development consultant, facilitated for organisations and individuals such as NTA2, Dream Development Center pay-it-forward initiative etc ',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  manageImage1(instance:any) {
    this.image1 = instance;
  }

  manageImage2(instance:any) {
    this.image2 = instance;
  }
}
