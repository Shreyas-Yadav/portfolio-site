import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styles: ['invert  { filter: invert(1) }']
})
export class SkillsComponent {

  frontends = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/react/react-original.svg', isInvertLogo: false },
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/html5/html5-original.svg', isInvertLogo: false },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/css3/css3-original.svg', isInvertLogo: false },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/bootstrap/bootstrap-original.svg', isInvertLogo: false },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/javascript/javascript-original.svg', isInvertLogo: false },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/typescript/typescript-original.svg', isInvertLogo: false },
  ];

  backends = [
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/java/java-original.svg', isInvertLogo: false },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg', isInvertLogo: false },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nodejs/nodejs-original.svg', isInvertLogo: false },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/express/express-original.svg', isInvertLogo: true },
    { name: 'PHP', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/php/php-original.svg', isInvertLogo: true },
    { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/spring/spring-original.svg', isInvertLogo: false },
    { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', isInvertLogo: true },
    { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg', isInvertLogo: true }
  ];

  databases = [
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg', isInvertLogo: false },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postgresql/postgresql-original.svg', isInvertLogo: false },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg', isInvertLogo: false }
  ];

  opss = [
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/git/git-original.svg', isInvertLogo: false },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/docker/docker-original.svg', isInvertLogo: false },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', isInvertLogo: false },
  ];

}
