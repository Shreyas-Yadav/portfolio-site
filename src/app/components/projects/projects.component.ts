import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Network Path Compression Analysis System',
      description: [
        'Developed an end-to-end network compression detection applications by implementing client/server and standalone solutions using raw sockets and UDP packet trains, enabling network engineers to identify compression links with 100 ms precision.',
        'Engineered a robust network analysis tool by creating multi-phase detection protocols with configurable parameters, resulting in successful compression detection across both cooperative and uncooperative network environments.',
      ],
      techStack: ['C', 'Wireshark', 'Linux'],
      image: '/assets/worldwide.png',
      aosImage: 'fade-right'
    },
    {
      title: 'Wireframe To Code',
      description: [
        'Engineered a full-stack Wireframe-to-Code application by integrating Firebase authentication and OpenRouter API, resulting in 2 times faster prototype development for users converting design mockups to functional code.',
        'Architected a responsive AI-powered code generation platform by implementing Tailwind UI components and NeonDB integration, enabling designers to transform wireframes into production-ready code with 60% accuracy.'
      ],
      techStack: ['Typescript', 'Next.JS', 'Firebase' , 'NeonDB' , 'Tailwind'],
      image: '/assets/wireframe.png',
      aosImage: 'fade-right'
    },
    {
      title: 'AI Chat-Assitant',
      link:'https://lab02-shreyas-yadav.onrender.com',
      description: [
        'Developed a real-time chat application using FastAPI and WebSocket for backend, enabling session-based conversations with context preservation.',
        'Implemented support for multiple LLM models via OpenRouter, allowing users to choose from a variety of models like GPT-4o-mini, Claude-3.5 Sonnet, and Gemini-Flash-Thinking-2.',
        'Incorporated a feature to check context relevance with prompt and ask users to start a new chat when necessary.',
      ],
      techStack: ['FastAPI', 'WebSockets', 'Openrouter', 'JS/HTML/CSS'],
      image: '/assets/chat-bot.png',
      aosImage: 'fade-right'
    },
    {
      title: 'Hotel Reviews Management System',
      link:'https://github.com/Shreyas-Yadav/Hotel-Reviews-System',
      description: [
        'Developed a full-stack hotel review platform using Java (Jetty/Servlets) for the backend and JavaScript (Fetch API) for the frontend, enabling users to search hotels, read/write reviews, and manage accounts securely',
        'Implemented a MySQL-backed data management system with JDBC, reducing query response time by 30% while maintaining data integrity for hotel reviews and user preferences.',
        'Enhanced user experience with dynamic AJAX updates, decreasing page load times by 50% and improving interactivity for high-traffic features such as review submissions and favorites management.'
      ],
      techStack: ['Java', 'Jetty Server', 'MySQL', 'HTML/CSS/JS/Bootstrap'],
      image: '/assets/Hotel-Reviews.png',
      aosImage: 'fade-right'
    },
    {
      title: 'Airbnb Clone',
      link:'https://github.com/Shreyas-Yadav/Airbnb_Project',
      description: [
        'Engineered a real-time chat application using FastAPI and WebSocket, enabling session-based conversations with 100% context preservation across multiple user interactions',
        'Implemented support for multiple LLM models via OpenRouter cloud API, allowing users to select from various models like GPT-4o-mini, Claude-3.5 Sonnet, and Gemini-Flash-Thinking-2.',
        'Developed an intelligent context relevance checker that improved conversation quality by 40% by prompting users to start new chats when context shifts occurred.'
      ],
      techStack: ['React', 'Node', 'Express', 'MongoDB'],
      image: '/assets/Airbnb-Logo-2014.png',
      aosImage: 'fade-left'
    },

  ];
}
