# Movie API Service

This project is a take-home assessment for creating a Node.js API service using TypeScript. The service fetches movies for a specific year, sorted by descending popularity, and includes optional movie editor information from a third-party API.

---

## Features

- Fetches movies released in a specified year.
- Returns movies sorted by popularity in descending order.
- Provides additional editor information (optional) using a secondary API.
- Handles errors gracefully if the editor information API fails.
- Fully written in TypeScript for type safety and maintainability.
- Includes unit tests for API and utility functions.

---

## Requirements

- **Node.js**: Version 21 or higher
- **TypeScript**
- No frameworks like NestJS were used.
- Allowed dependencies:
  - Express
  - Axios
  - dotenv
- Includes unit tests using Jest.

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository_url>
cd nodejs-movie-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory with the following content:
```env
TMDB_BEARER_TOKEN=<your-tmdb-bearer-token>
```
Replace `<your-tmdb-bearer-token>` with your API key from [[The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api)](https://www.themoviedb.org/documentation/api).

### 4. Build the Project
```bash
npm run build
```

### 5. Start the Server
```bash
npm start
```

The server will start at `http://localhost:3000`.

---

## API Documentation

### **Endpoint: `/movies`**

#### **Request**
- **Method**: GET
- **Query Parameters**:
  - `year` (required): The release year of the movies (e.g., `2019`).
  - `page` (optional): The page of results to retrieve (default: `1`).

#### **Example Request**
```bash
curl "http://localhost:3000/movies?year=2019&page=1"
```

#### **Response**
A JSON array of movies, each containing:
- `title`: Title of the movie.
- `release_date`: Release date in YYYY-MM-DD format.
- `vote_average`: Average vote rating of the movie.
- `editors`: (Optional) List of editors for the movie.

#### **Example Response**
```json
[
  {
    "title": "Joker",
    "release_date": "2019-10-02",
    "vote_average": 8.2,
    "editors": [
      "Jeff Groth",
      "Ray Neapolitan"
    ]
  },
  {
    "title": "Avengers: Endgame",
    "release_date": "2019-04-24",
    "vote_average": 8.3,
    "editors": []
  }
]
```

---

## Development

### **Run in Development Mode**
```bash
npm run dev
```

This will watch for file changes and restart the server automatically.

### **Run Tests**
```bash
npm test
```

Tests include:
- Unit tests for the API service (`src/api.ts`).
- Utility functions for processing editor data (`src/utils.ts`).

---

## Project Structure
```
nodejs-movie-api/
├── src/
│   ├── index.ts          # Entry point
│   ├── api.ts            # Handles API calls to TMDb
│   ├── utils.ts          # Utility functions for processing data
│   ├── types.ts          # TypeScript types and interfaces
│   ├── config.ts         # Configuration for environment variables
│   └── tests/            # Unit tests
│       ├── api.test.ts
│       ├── utils.test.ts
├── dist/                 # Compiled output (generated on build)
├── .env                  # Environment variables (ignored by git)
├── .gitignore            # Ignored files and folders
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── jest.config.js        # Jest configuration
└── README.md             # Project documentation
```

---

## Error Handling
- If the movie editor API (`Movie Credit API`) fails, the response will omit the `editors` field for that movie.
- A `500` status code will be returned only for unexpected errors.

---

## Future Improvements
- Add pagination support for the `/movies` endpoint.
- Cache movie and editor data to reduce API calls.
- Implement better logging for debugging and monitoring.

---

## License
This project is licensed under the MIT License.
