import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  skills = [
    { name: 'Photography', level: 95 },
    { name: 'Videography', level: 90 },
    { name: 'Photo Editing', level: 92 },
    { name: 'Video Editing', level: 88 },
    { name: 'Drone Photography', level: 85 },
    { name: 'Creative Direction', level: 93 }
  ];

  achievements = [
    {
      year: '2023',
      title: 'Wedding Photographer of the Year',
      organization: 'Regional Photography Awards'
    },
    {
      year: '2022',
      title: 'Best Corporate Video Campaign',
      organization: 'Business Media Awards'
    },
    {
      year: '2021',
      title: 'Rising Star in Photography',
      organization: 'Creative Arts Society'
    }
  ];
}