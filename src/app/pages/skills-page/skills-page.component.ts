import { Component } from '@angular/core';
import { SkillsComponent } from '../../components/skills/skills.component';

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [SkillsComponent],
  templateUrl: './skills-page.component.html',
  styleUrl: './skills-page.component.css'
})
export class SkillsPageComponent {

}
