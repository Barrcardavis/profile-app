# 📘 Profile App (React Hook Form + TanStack Query + Mock REST API)

## Overview
This project implements a simple Profile Management application using:

- React Hook Form for form handling and validation
- TanStack Query for data fetching, caching, and mutations
- json-server as a mock REST API backend
- Vite as the frontend development environment

The app loads a user profile from a mock API, allows the user to edit the fields, validates input, and updates the backend using a PUT request. It also simulates a server-side validation error for demonstration purposes.

## Features
- Load profile data from a mock REST API (GET /profile)
- Edit and update profile fields (PUT /profile)
- Form validation using React Hook Form
- Dirty-state tracking (Save button only enabled when changes exist)
- Simulated server-side email conflict (conflict@example.com)
- Success banner on successful update
- Error message on validation failure
- Clean, centered UI with custom CSS styling

## Project Structure
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

## How to Run the Project

### 1. Start the Backend (json-server)
cd server
npm install
npm start


Runs at:
http://localhost:3001/profile

### 2. Start the Frontend (Vite)
cd client
npm install
npm run dev

Runs at:
http://localhost:5173

## Simulated Server-Side Validation
Entering this email:
conflict@example.com
will trigger a simulated backend error:
This email is already taken.


## Success Feedback
A green success banner appears on successful update:
Profile updated successfully!


## Technologies Used
- React
- React Hook Form
- TanStack Query
- Vite
- json-server
- JavaScript (ES Modules)

## Assignment Requirements Checklist
✔ Load profile using TanStack Query  
✔ Update profile using mutation  
✔ React Hook Form validation  
✔ Dirty-state Save button  
✔ Simulated server-side error  
✔ Success feedback  
✔ Clean UI styling  
✔ Mock REST API backend  

## Author
David A. Davis  
North Seattle College — AD312

