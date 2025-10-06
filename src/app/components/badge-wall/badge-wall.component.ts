import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge-wall',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge-wall.html',
  styleUrls: ['./badge-wall.css']
})
export class BadgeWallComponent {
  badges = [
    { name: 'Angular', url: 'https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white' },
    { name: 'Tailwind', url: 'https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white' },
    { name: 'TypeScript', url: 'https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white' },
    // Add more badges here
  ];
}
