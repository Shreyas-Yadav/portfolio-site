import { Component } from '@angular/core';
import { ExperienceComponent as ExperienceDetailComponent } from '../../components/experience/experience.component';

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [ExperienceDetailComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperiencePageComponent {

}
