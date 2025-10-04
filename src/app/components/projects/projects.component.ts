import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { link } from 'node:fs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  selectedProject: any = null;
  isModalOpen = false;

  openModal(project: any) {
    this.selectedProject = project;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedProject = null;
  }

  techLogos: { [key: string]: string } = {
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    'React': 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/react/react-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/typescript/typescript-original.svg',
    'Socket.IO': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg',
    'OpenAI API': 'assets/openai.svg',
    'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg',
    'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
    'Python': 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg',
    'LlamaIndex': 'assets/llamaindex-color.svg',
    'Arize Phoenix': 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg',
    'LLM Evaluation': 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg',
    'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    'NS-3 Simulator': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
    'Network QoS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    'Wireshark': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
    'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
    'OpenCV': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg',
    'PID Controller': 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg',
    'Computer Vision': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg',
    'Typescript': 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/typescript/typescript-original.svg',
    'Next.JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    'NeonDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    'Tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
    'WebSockets': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg',
    'Openrouter': 'assets/openrouter.svg',
    'JS/HTML/CSS': 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/javascript/javascript-original.svg',
    'Java 17': 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/java/java-original.svg',
    'Maven': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg',
    'Jetty': 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/java/java-original.svg',
    'MapBox': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    'Bootstrap 5': 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/bootstrap/bootstrap-original.svg',
    'Node': 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nodejs/nodejs-original.svg',
    'Express': 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/express/express-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg',
  };

  getTechLogo(tech: string): string {
    return this.techLogos[tech] || 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/devicon/devicon-original.svg';
  }

  projects = [
    {
      title: 'EasyShare - Real-time Collaboration Platform',
      link: 'https://github.com/Shreyas-Yadav',
      description: [
        'Developed full-stack real-time collaboration platform using Next.js, React, and TypeScript with Socket.IO integration, supporting 10+ concurrent participants with sub-second response times.',
        'Implemented AI-powered receipt analysis using OpenAI API and Firebase Storage to automatically extract restaurant bill details, reducing manual data entry by 90% for bill splitting scenarios.',
        'Built scalable backend architecture with Redis caching, Clerk authentication, and RESTful APIs, maintaining data persistence across user sessions.',
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'Socket.IO', 'OpenAI API', 'Firebase', 'Redis'],
      image: '/assets/worldwide.png',
      aosImage: 'fade-right'
    },
    {
      title: 'Agent Reasoning Alignment Study',
      link: 'https://github.com/Shreyas-Yadav',
      description: [
        'Conducted systematic evaluation of LLM agent reasoning across 500+ automation scenarios, discovering 23% degradation in multi-step reasoning chains and identifying critical alignment failures in tool selection consistency and sequential decision-making processes.',
        'Developed novel evaluation framework using LlamaIndex and Arize Phoenix to measure agent reasoning quality, revealing coordination failures in 15% of multi-agent scenarios and systematic bias in complex task decomposition workflows.',
        'Architected automated safety assessment pipeline for GitHub agent architectures, enabling reproducible evaluation of alignment properties and real-time detection of reasoning breakdowns across single-agent and multi-agent systems with comprehensive failure mode documentation.',
      ],
      techStack: ['Python', 'LlamaIndex', 'Arize Phoenix', 'LLM Evaluation'],
      image: '/assets/wireframe.png',
      aosImage: 'fade-right'
    },
    {
      title: 'Quality of Service Network Simulations',
      link: 'https://github.com/Shreyas-Yadav',
      description: [
        'Developed comprehensive NS-3 QoS simulation framework using C++, implementing Strict Priority Queuing and Deficit Round Robin scheduling algorithms with IPv4 packet classification and configurable traffic classes.',
        'Engineered packet filtering system with header analysis, port-based routing, and subnet filtering to enable traffic shaping and bandwidth allocation with comprehensive performance evaluation metrics.',
      ],
      techStack: ['C++', 'NS-3 Simulator', 'Network QoS'],
      image: '/assets/chat-bot.png',
      aosImage: 'fade-right'
    },
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
      title: 'Autonomous Vehicle Navigation System',
      link:'https://youtube.com/shorts/6SXVqx_Jp2A?si=-ABPWS6Prxow2ptN',
      description: [
        'Developed computer vision-based autonomous navigation system using OpenCV and Python, implementing lane detection algorithms with Canny edge detection and Hough line transforms to achieve 95% accuracy in lane boundary identification.',
        'Engineered real-time steering control system with PID controller and image processing pipeline, enabling autonomous path following with 30 FPS video processing and sub-100ms response times for steering adjustments.',
        'Implemented advanced computer vision techniques including perspective transformation, color space conversion, and region of interest masking to handle varying lighting conditions and road curvatures with robust lane tracking performance.',
      ],
      techStack: ['Python', 'OpenCV', 'PID Controller', 'Computer Vision'],
      image: '/assets/smart-car.png',
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
      title: 'Hotels Management System',
      link:'https://github.com/Shreyas-Yadav/Hotel-Reviews-System',
      description: [
        'Developed full-stack Java web application implementing Java 17, Maven, MySQL, and Jetty server with secure user authentication, CRUD operations, and REST API endpoints for hotel search functionality.',
        'Engineered interactive hotel discovery platform with MapBox integration and Bootstrap 5 responsive design, enabling location visualization with comprehensive rating system and SHA-256 password hashing.',
      ],
      techStack: ['Java 17', 'Maven', 'MySQL', 'Jetty', 'MapBox', 'Bootstrap 5'],
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
