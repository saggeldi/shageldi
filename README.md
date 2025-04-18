# Shageldi's Portfolio

A personal portfolio website showcasing skills, projects, and experience. Built with React, TypeScript, and Vite.

## Project Structure

```
shageldi/
├── public/             # Static assets (images, icons)
├── src/                # Source code
│   ├── assets/         # Project assets
│   ├── components/     # Reusable UI components
│   │   ├── Home/       # Home page components
│   │   │   ├── AboutHome.tsx       # About section
│   │   │   ├── Advantages.tsx      # Advantages section
│   │   │   ├── Contact.tsx         # Contact section
│   │   │   ├── Experience.tsx      # Experience section
│   │   │   ├── Hero.tsx            # Hero section
│   │   │   ├── Skills.tsx          # Skills section
│   │   │   ├── TelegramChanell.tsx # Telegram channel section
│   │   │   └── Works.tsx           # Works/projects section
│   │   └── Main/      # Main layout components
│   ├── features/       # Redux features/slices
│   ├── hooks/          # Custom React hooks
│   │   └── useMyWorks.ts  # Hook for managing works/projects data
│   ├── page/           # Application pages
│   │   ├── Home.tsx    # Home page
│   │   └── Router.tsx  # Routing configuration
│   ├── theme/          # Theme configuration
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
├── index.html          # HTML entry point
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## Technologies and Libraries

### Core Technologies
- **React 18**: JavaScript library for building user interfaces
- **TypeScript**: Typed superset of JavaScript
- **Vite**: Next-generation frontend build tool

### UI Libraries
- **Material UI**: React component library implementing Google's Material Design
- **Ant Design**: A design system for enterprise-level products
- **Styled Components**: CSS-in-JS library
- **React Icons**: Icon library for React

### Animation and Visual Effects
- **Animate.css**: CSS animation library
- **React Type Animation**: Typing animation component
- **React Tilt**: 3D tilt effect for React components
- **Three.js**: 3D library for React (@react-three/fiber, @react-three/drei)

### State Management
- **Redux**: State management library (@reduxjs/toolkit, react-redux)

### Routing
- **React Router**: Declarative routing for React

### Other Libraries
- **Swiper**: Modern mobile touch slider
- **React Responsive**: Media queries in React
- **React Toggle Dark Mode**: Dark mode toggle component

## Screens/Sections

The portfolio is a single-page application with the following main sections:

1. **Hero**: Main banner/header section with introduction
2. **About**: Information about the portfolio owner
3. **Skills**: Technical skills and competencies
4. **Advantages**: Key strengths and advantages
5. **Works**: Portfolio of projects and works
6. **Experience**: Professional experience and work history
7. **Contact**: Contact information and form

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Interactive UI**: Animations and interactive elements enhance user experience
- **Project Showcase**: Detailed display of projects with descriptions and links
- **3D Elements**: Three.js integration for 3D visual elements
- **Unit Tests**: Comprehensive test suite for project logic

## Installation and Usage

1. Clone the repository
   ```
   git clone <repository-url>
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Run the development server
   ```
   npm run dev
   ```

4. Build for production
   ```
   npm run build
   ```

5. Preview the production build
   ```
   npm run preview
   ```

6. Run tests
   ```
   npm test
   ```

7. Run tests in watch mode
   ```
   npm run test:watch
   ```

## Testing

The project includes a comprehensive test suite built with Jest and React Testing Library. The tests cover:

- **Hooks**: Tests for custom hooks like `useMyWorks` to ensure they return the expected data
- **Redux**: Tests for Redux slices, including reducers, actions, and selectors
- **Components**: Tests for React components (to be implemented)

The testing setup includes:

- **Jest**: JavaScript testing framework
- **React Testing Library**: Testing utilities for React components
- **ts-jest**: TypeScript preprocessor for Jest
- **jest-dom**: Custom Jest matchers for DOM testing

To run the tests, use the following commands:

```
npm test          # Run all tests
npm run test:watch # Run tests in watch mode
```

## Screenshots

Here are some screenshots of the projects showcased in the portfolio:

### Turkmen Sites Search
![Turkmen Sites Search](/public/images/search_tm.png)

### Kotlin Playground Telegram Bot
![Kotlin Playground Telegram Bot](/public/images/kotlinbot.png)

### Wakant
![Wakant](/public/images/wakant.png)

## License

[MIT License](LICENSE)
