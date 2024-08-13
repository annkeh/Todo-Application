# To-Do Application

This project is a simple To-Do application built with React for the front-end and Node.js with Express for the back-end. It demonstrates how to create, read, update, and delete to-do items with proper API interactions.

## Features

- Add new to-do items.
- Mark to-do items as completed.
- Delete to-do items.
- View a list of all to-do items, categorized into incomplete and completed.

## Technologies Used

- **Front-End:** React, Axios (for API calls), CSS
- **Back-End:** Node.js, Express
- **Data Storage:** In-memory data store (array)

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Setup

**Install dependencies:**
**Navigate to the backend and frontend directories and install dependencies for both:**

## Running the Application
Start the back-end server:
- cd server
- npm start
The server will run on http://localhost:5001 by default.

**Start the front-end application:**
cd ../client
npm start
The React application will run on http://localhost:3000 by default.


## API Endpoints
- GET /api/todos - Retrieve all to-do items
- POST /api/todos - Add a new to-do item
- PUT /api/todos/:id - Update an existing to-do item (e.g., mark as completed)
- DELETE /api/todos/:id - Delete a to-do item

  
## How It Works
Front-End:
- Uses React for building the user interface.
- Manages state with useState and side effects with useEffect.
- Makes API calls to the back-end using axios.

  
Back-End:
- Uses Express to create a RESTful API.
- Handles CRUD operations on an in-memory data store (array).
- CORS is enabled to allow requests from the front-end.

  
Error Handling:

- Both the front-end and back-end include basic error handling to manage failed API requests.
  
Customization
- Styling: Customize the appearance of the application by editing the App.css file.
- API: Modify the API endpoints or data handling in the backend directory as needed.

