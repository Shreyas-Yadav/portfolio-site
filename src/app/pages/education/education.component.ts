import { Component } from '@angular/core';
import { EducationComponent as EducationDetailComponent } from '../../components/education/education.component';

@Component({
  selector: 'app-education-page',
  standalone: true,
  imports: [EducationDetailComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationPageComponent {

}
