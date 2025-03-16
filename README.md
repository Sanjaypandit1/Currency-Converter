# Currency Converter

A simple web application that allows users to convert currencies using real-time exchange rates.

## Features
- Convert between different currencies
- User-friendly interface with dropdown selections for currency
- Error handling for invalid inputs or failed requests

## Technologies Used
- React.js (Frontend)
- Node.js with Express (Backend)
- Axios (for API requests)
- Exchange Rate API (for currency conversion data)

## Installation

### Prerequisites
- Node.js and npm installed

### Steps to Set Up the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/Sanjaypandit1/Currency-Converter.git
   cd currency-converter
   ```

2. Install frontend dependencies:
   ```sh
   cd currency-converter
   npm install
   ```

3. Install backend dependencies:
   ```sh
   cd backend  # Navigate to the backend folder (if applicable)
   npm install
   ```

## Running the Project

### Start the Backend Server
```sh
node server.js
```

### Start the Frontend React App
```sh
cd ..  # Go to the React project directory
npm start
```

The frontend should now be running at `http://localhost:3000` and the backend at `http://localhost:5001`.


## Troubleshooting
- **Module not found: Can't resolve 'axios'**: Run `npm install axios`.
- **CORS issues**: Ensure the backend has CORS enabled.
- **Server not responding**: Check if the backend is running on the correct port.


## Author
[Sanjay Pandit]

