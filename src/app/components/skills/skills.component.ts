import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  logo: string;
  isInvertLogo: boolean;
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styles: [`
    .invert { filter: invert(1); }

    .headline-ticker {
      overflow: hidden;
      position: relative;
      background: transparent;
    }

    .ticker-content {
      display: flex;
      animation: scroll 30s linear infinite;
      will-change: transform;
    }

    .ticker-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 2rem;
      white-space: nowrap;
      min-width: fit-content;
      flex-shrink: 0;
    }

    @keyframes scroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }

    .ticker-content:hover {
      animation-play-state: paused;
    }

    .skill-name {
      color: #ccd6f6;
      font-weight: 500;
    }
  `]
})
export class SkillsComponent implements OnInit, OnDestroy {
  aiSkills: Skill[] = [];
  frontendSkills: Skill[] = [];
  backendSkills: Skill[] = [];
  databaseSkills: Skill[] = [];
  devopsSkills: Skill[] = [];

  private generativeAI = [
    { name: 'OpenAI', logo: 'assets/openai.svg', isInvertLogo: true, category: 'AI' },
    { name: 'Calude', logo: 'assets/claude-color.svg', isInvertLogo: false, category: 'AI' },
    { name: 'Ollam', logo: 'assets/ollama-text.svg', isInvertLogo: true, category: 'AI' },
    { name: 'Gemini', logo: 'assets/gemini-color.svg', isInvertLogo: false, category: 'AI' },
    { name: 'Openrouter', logo: 'assets/openrouter.svg', isInvertLogo: true, category: 'AI' },
    { name: 'LlamaIndex', logo: 'assets/llamaindex-color.svg', isInvertLogo: false, category: 'AI' },
  ];

  private frontends = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/react/react-original.svg', isInvertLogo: false, category: 'Frontend' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', isInvertLogo: true, category: 'Frontend' },
    { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg', isInvertLogo: false, category: 'Frontend' },
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/html5/html5-original.svg', isInvertLogo: false, category: 'Frontend' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/css3/css3-original.svg', isInvertLogo: false, category: 'Frontend' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/bootstrap/bootstrap-original.svg', isInvertLogo: false, category: 'Frontend' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/javascript/javascript-original.svg', isInvertLogo: false, category: 'Frontend' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/typescript/typescript-original.svg', isInvertLogo: false, category: 'Frontend' },
    { name: 'TailwindCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', isInvertLogo: false, category: 'Frontend' },
  ];

  private backends = [
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/java/java-original.svg', isInvertLogo: false, category: 'Backend' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg', isInvertLogo: false, category: 'Backend' },
    { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', isInvertLogo: true, category: 'Backend' },
    { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', isInvertLogo: true, category: 'Backend' },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', isInvertLogo: false, category: 'Backend' },
    { name: 'PHP', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/php/php-original.svg', isInvertLogo: true, category: 'Backend' },
    { name: 'RISC-V', logo: 'https://cdn.brandfetch.io/idGm5lRj_H/w/230/h/230/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1753309010128', isInvertLogo: true, category: 'Backend' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nodejs/nodejs-original.svg', isInvertLogo: false, category: 'Backend' },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/express/express-original.svg', isInvertLogo: true, category: 'Backend' },
    { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/spring/spring-original.svg', isInvertLogo: false, category: 'Backend' },
    { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg', isInvertLogo: true, category: 'Backend' },
    { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', isInvertLogo: true, category: 'Backend' },
    { name: 'Socket.IO', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg', isInvertLogo: true, category: 'Backend' }
  ];

  private databases = [
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg', isInvertLogo: false, category: 'Database' },
    { name: 'Oracle DB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg', isInvertLogo: false, category: 'Database' },
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg', isInvertLogo: false, category: 'Database' },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg', isInvertLogo: false, category: 'Database' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg', isInvertLogo: false, category: 'Database' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postgresql/postgresql-original.svg', isInvertLogo: false, category: 'Database' },
  ];

  private opss = [
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/git/git-original.svg', isInvertLogo: false, category: 'DevOps' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', isInvertLogo: true, category: 'DevOps' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/docker/docker-original.svg', isInvertLogo: false, category: 'DevOps' },
    { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', isInvertLogo: false, category: 'DevOps' },
    { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', isInvertLogo: false, category: 'DevOps' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', isInvertLogo: false, category: 'DevOps' },
    {name : 'nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg', isInvertLogo: true, category: 'DevOps' },
    {name:'composer', logo:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/composer/composer-original.svg', isInvertLogo: false, category: 'DevOps' },
    {name:'npm', logo:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg', isInvertLogo: false, category: 'DevOps' },
    { name: 'GCP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg', isInvertLogo: false, category: 'DevOps' },
    { name: 'Maven', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg', isInvertLogo: false, category: 'DevOps' },
    { name: 'NS-3 Simulator', logo: 'https://cdn.brandfetch.io/idB44rruTQ/w/512/h/512/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1744925299749', isInvertLogo: true, category: 'DevOps' },
  ];

  ngOnInit() {
    // Duplicate each category for seamless infinite loop (circular queue)
    this.aiSkills = [...this.generativeAI, ...this.generativeAI];
    this.frontendSkills = [...this.frontends, ...this.frontends];
    this.backendSkills = [...this.backends, ...this.backends];
    this.databaseSkills = [...this.databases, ...this.databases];
    this.devopsSkills = [...this.opss, ...this.opss];
  }

  ngOnDestroy() {}
}
