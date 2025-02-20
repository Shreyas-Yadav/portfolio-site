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
      title: 'Hotel Reviews Management System',
      link:'https://github.com/Shreyas-Yadav/Hotel-Reviews-System',
      description: [
        'Developed a full-stack hotel review platform using Java (Jetty/Servlets) for the backend and JavaScript (Fetch API) for the frontend, enabling users to search hotels, read/write reviews, and manage accounts securely.',
        'Implemented a MySQL-backed data management system with JDBC for storing hotel reviews and user preferences, including authentication and access control.',
        'Enhanced user experience with dynamic AJAX updates for fetching reviews, liking comments, and managing favorite hotels without page reloads, improving interactivity and responsiveness.'
      ],
      techStack: ['Java', 'Jetty Server', 'MySQL', 'HTML/CSS/JS/Bootstrap'],
      image: '/assets/Hotel-Reviews.png',
      aosImage: 'fade-right'
    },
    {
      title: 'Airbnb Clone',
      link:'https://github.com/Shreyas-Yadav/Airbnb_Project',
      description: [
        'Implemented secure user authentication and authorization using the MERN Stack (MongoDB, Express.js, React, Node.js), including email/password registration, login, and profile management with JWT token validation.',
        'Property Listings and Search Functionality: Enabled hosts to list properties with detailed descriptions, images, and pricing, while providing guests with advanced search filters to find accommodations that meet their preferences.',
        'Booking System and In-App Messaging: Developed a booking system for guests to reserve properties and integrated an in-app messaging feature to facilitate communication between hosts and guests, enhancing the overall user experience.'
      ],
      techStack: ['React', 'Node', 'Express', 'MongoDB'],
      image: '/assets/Airbnb-Logo-2014.png',
      aosImage: 'fade-left'
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
  ];
}
