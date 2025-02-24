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
        'Implemented secure user authentication and authorization using the MERN Stack (MongoDB, Express.js, React, Node.js), including email/password registration, login, and profile management with JWT token validation.',
        'Designed an intuitive property listing system with advanced search functionality, increasing user search precision by 60% and reducing time-to-booking by 25%.',
        'Booking System and In-App Messaging: Developed a booking system for guests to reserve properties and integrated an in-app messaging feature to facilitate communication between hosts and guests, enhancing the overall user experience.'
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
