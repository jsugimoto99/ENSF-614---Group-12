# Flight Reservation Web App
**Term project for ENSF 614 - Fall 2023 - Group 12**

## How to Run
1. Clone the repository to your local machine.
2. Start your MySQL server on your local machine.
3. Load the `CloudNineBackend` folder into your java IDE of choice.
4. Open `src/main/resources/application.properties` and enter your database server details. For `db.user` and `db.password` enter your own personal database login details.
5. Connect to your MySQL Server using the information you entered from above in Step 4.
6. Run the `CloudNine.mysql` file to populate the database with all required tables and any values that are required.
7. To start the backend process, run `CloudNineBackendApplication.java`. Running this file will start the Spring Boot web application with catering to cross-origin requests from "http://localhost:3000".
8. To begin the frontend process, ensure NodeJS is installed on your computer, and then open the `CloudNineFrontend` folder in your JavaScript IDE.
9. In the terminal, run command `npm install` and then `npm start`.
10. `npm start` will run the website in development mode and can be viewed in the browser at [http://localhost:3000](http://localhost:3000).

## Objective
The goal of this project is to create a flight reservation web application where users can browse and purchase flights. The web application also provides access for administrators to modify flights, aircrafts, and crew.
More information can be seen in the project description document.

## Project Demonstration
... *(Continue with your content here)* ...

## Project Design
Diagrams from the design phase of the project can be found in our [Design Phase Documentation](./Diagrams). These diagrams include: a use-case diagram, use-case scenarios based off the use-case diagram, an activity diagram, sequence diagram, state transition diagrams, a system domain diagram, domain classes, boundary classes, controller classes, a package diagram, and a deployment diagram.
