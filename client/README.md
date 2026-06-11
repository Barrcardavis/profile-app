Profile App (React Hook Form + TanStack Query + Mock REST API)
Overview
This project implements a simple Profile Management application using:

React Hook Form for form handling and validation

TanStack Query for data fetching, caching, and mutations

json‑server as a mock REST API backend

Vite as the frontend development environment

The app loads a user profile from a mock API, allows the user to edit the fields, validates input, and updates the backend using a PUT request. It also simulates a server‑side validation error for demonstration purposes.

Features
Load profile data from a mock REST API (GET /profile)

Edit and update profile fields (PUT /profile)

Form validation using React Hook Form

Dirty‑state tracking (Save button only enabled when changes exist)

Simulated server‑side email conflict (conflict@example.com)

Success banner on successful update

Error message on validation failure

Clean, centered UI with custom CSS styling

Project Structure

profile-app/
│
├── client/        # React frontend (Vite)
│   ├── src/
│   │   ├── ProfileForm.jsx
│   │   ├── ProfileForm.css
│   │   └── main.jsx
│   └── package.json
│
├── server/        # Mock backend using json-server
│   ├── db.json
│   └── package.json
│
└── README.md

How to Run the Project
1. Start the Backend (json‑server)
Open a terminal and run:

cd server
npm install
npm start

This starts json‑server on:

http://localhost:3001/profile

2. Start the Frontend (Vite)
Open a second terminal:

cd client
npm install
npm run dev

Vite will start the React app on:

http://localhost:5173

Open that URL in your browser.

Simulated Server‑Side Validation
To demonstrate server‑side validation, entering this email:

conflict@example.com

will trigger a simulated backend error and display a field‑level message:

This email is already taken.

Success Feedback
When the profile updates successfully, a green success banner appears:

Profile updated successfully!

The banner auto‑hides after 3 seconds.

Technologies Used
React

React Hook Form

TanStack Query

Vite

json‑server

JavaScript (ES Modules)

Assignment Requirements Checklist
✔ Load profile using TanStack Query
✔ Update profile using mutation
✔ React Hook Form validation
✔ Dirty‑state Save button
✔ Simulated server‑side error
✔ Success feedback
✔ Clean UI styling
✔ Mock REST API backend

All required features have been implemented.

Author
David A. Davis
North Seattle College — AD312