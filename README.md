# Learning Journey Platform

Welcome to the **Learning Journey Platform**, a modern and intuitive web application designed to enhance your learning experience with curated courses and expert-led events.

---

## Table of Contents

1. [About the Project](#about-the-project)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
5. [How to Run](#how-to-run)
6. [Folder Structure](#folder-structure)
7. [Contributing](#contributing)
8. [License](#license)

---

## About the Project

The Learning Journey Platform is a React-based web application that provides:

- **Interactive Learning**: Explore curated courses across various domains.
- **Events Calendar**: Stay updated with upcoming workshops and bootcamps.

---

## Features

- **Hero Section**: Eye-catching introduction with a "Get Started" button.
- **Featured Courses**: Explore a curated list of top-rated courses.
- **Upcoming Events**: Stay informed about upcoming events with RSVP links.
- **Custom Error Pages**: Stylish 404 and error pages.
- **Loading States**: Loading spinner for better user experience.
- **Dark Mode**: Toggle between light and dark themes for enhanced accessibility.
- **User Profile**: Manage personal settings and track course progress.

---

## Technologies Used

### Frontend
- **React**: Core framework for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.

### Tooling
- **Vite**: Fast build tool for development and production.
- **ESLint**: JavaScript linting.
- **Prettier**: Code formatting.

### Routing & Icons
- **React Router**: For navigation and routing.
- **Heroicons**: Stylish SVG icons.

---

## Getting Started

Follow the steps below to set up and run the project locally:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kartikkkdua/LMSFrontend
   cd LMSFrontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

---

## How to Run

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Folder Structure

```
LMSFrontend
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── components
│   │   ├── AchievementBadges.jsx
│   │   ├── ActivityFeed.jsx
│   │   ├── Button.jsx
│   │   ├── CourseCard.jsx
│   │   ├── CourseProgress.jsx
│   │   ├── CourseRecommendations.jsx
│   │   ├── DarkModeToggle.jsx
│   │   ├── ErrorPage.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProfileCard.jsx
│   │   └── ProfileSettings.jsx
│   ├── context
│   │   └── AuthContext.jsx
│   ├── data
│   │   ├── activities.js
│   │   └── courses.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── pages
│   │   ├── Courses.jsx
│   │   ├── Dashboard.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Profile.jsx
│   │   ├── ResetPassword.jsx
│   │   └── Signup.jsx
│   ├── reportWebVitals.js
│   ├── services
│   │   └── api.js
│   └── setupTests.js
```

---

## Contributing

Contributions are welcome! Please follow the steps below:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

---
