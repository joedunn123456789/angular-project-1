import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BadgeWallComponent } from './components/badge-wall/badge-wall.component';
import { CrmImpactComponent } from './components/crm-impact/crm-impact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BadgeWallComponent, CrmImpactComponent],  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('impact-dashboard');
}
