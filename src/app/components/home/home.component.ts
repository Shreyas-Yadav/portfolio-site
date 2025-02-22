import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from '../contact/contact.component';
import { EducationComponent } from '../education/education.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    HeroComponent,
    AboutMeComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    ContactComponent,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class HomeComponent { }
