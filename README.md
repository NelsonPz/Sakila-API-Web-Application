# Sakila API Web Application

## Overview
The Sakila API Web Application is a modern web application built for managing and browsing data related to actors and films. It leverages Java Spring Boot for the server-side implementation and Vue.js for the client-side interface. The project provides RESTful API endpoints for fetching paginated data of actors and films, and it offers a responsive and user-friendly interface for browsing and managing the data.

## Features
- View paginated lists of actors and films.
- Navigate through different pages of actor or film data.
- Retrieve the total count of actors or films.
- Responsive design for seamless user experience across devices.

## Project Structure
- **Server-side (Java Spring Boot)**:
  - Entity Classes: `Actor` and `Film`.
  - Repository Interfaces: `ActorRepo` and `FilmRepo`.
  - Main Controller: Defines RESTful API endpoints (`/api/actors`, `/api/films`, `/api/getAll`) for fetching data.
- **Client-side (Vue.js)**:
  - HTML Interface: Provides a dynamic and interactive interface for users.
  - Vue Application: Fetches data from the server-side API and updates the UI accordingly.
  - Methods: Handle fetching resources, navigating through pages, and calculating the total number of pages.

## Getting Started
To run the Sakila API Web Application locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd sakila-api-web-app`
3. Install dependencies:
   - Backend (Java Spring Boot): Dependencies are managed using Maven. Run `mvn clean install` to install dependencies.
   - Frontend (Vue.js): Dependencies are managed using npm. Run `npm install` to install dependencies.
4. Run the application:
   - Backend: Start the Spring Boot application.
   - Frontend: Serve the Vue.js application using a development server.
5. Access the application in your web browser at `http://localhost:8080`.

## Technologies Used
- Java Spring Boot
- Vue.js
- HTML/CSS
