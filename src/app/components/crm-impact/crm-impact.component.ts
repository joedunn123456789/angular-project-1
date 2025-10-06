import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crm-impact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crm-impact.html',
  styleUrls: ['./crm-impact.css']
})
export class CrmImpactComponent {
  cases = [
    {
      title: 'Salesforce Automation',
      description: 'Streamlined lead routing and follow-up workflows.',
      points: [
        'Reduced manual entry by 80%',
        'Improved response time by 40%',
        'Enabled dynamic badge tracking'
      ],
      open: false
    },
    {
      title: 'HubSpot Integration',
      description: 'Connected marketing campaigns to CRM pipelines.',
      points: [
        'Auto-tagged leads by campaign source',
        'Triggered follow-ups via badge logic'
      ],
      open: false
    }
  ];
}
