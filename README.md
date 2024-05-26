# Movie API

This is a Nest.js backend application that serves as the foundation for a movie database. Users can interact with a wide variety of movies, rate them, and explore based on their interests.

## Tech Stack

- **Nest.JS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **TypeScript**: Bringing the benefits of strong typing and modern JavaScript features to backend development.
- **PostgreSQL**: A robust and reliable relational database management system, ensuring data integrity and performance.
- **TypeORM**: A versatile ORM that simplifies database interactions and streamlines development with TypeScript support.
- **Hexagonal Architecture Pattern**: Structuring the application in a modular and maintainable way, promoting separation of concerns and testability.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Ayushhgupta39/buidlerstribe-assignment.git
```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the PostgreSQL database:

   - Create a new PostgreSQL database named `movie_db`
   - Update the database credentials in the `app.module.ts` file with your PostgreSQL username and password.

4. Start the application:
   ```bash
   npm run start:dev
   ```

The server will start running at `http://localhost:3000`.

## Start PostgresSQL Server

### Using Docker

You can run PostgreSQL using Docker:

  1. Install Docker on your machine if you haven't already.
  2. Pull the official PostgresSQL Docker image:
   ```bash
   docker pull postgres
   ```
  3. Run a new PostgresSQL container:
   ```bash
   docker run --name psql -p 5432:5432 -e POSTGRES_USER=<username> -e POSTGRES_PASSWORD=<password> -e POSTGRES_DB=movie_db -d postgres
   ```

### Locally

Alternatively, If you have PostgreSQL installed locally, you can start the server by following these steps:

  - On macOS, you can start the PostgreSQL server using the following command:
    ```bash
    brew services start postgresql
    ```
  - On Linux, you can start the PostgreSQL server using the following command:
    ```bash
    sudo systemctl start postgresql
    ```

  - On Windows, you can start the PostgreSQL server from the Start menu or by running the `pg_ctl` command.

## API Endpoints

#### 1.  Get all movies.
   
  **GET** `/movies`

  Response:


  ```json
    [
      {
        "id": 1,
        "title": "The Shawshank Redemption",
        "genre": "Drama",
        "rating": 9.3
      },
      {
        "id": 2,
        "title": "The Godfather",
        "genre": "Crime",
        "rating": 9.2
      }
    ]
  ```

#### 2.  Filter Movies by Genre

  **GET** `/movies/genre/:genre`
  
  **Parameters:** `genre`(string): The genre to filter movies by.

  Response:

  ```json
    [
      {
        "id": 2,
        "title": "The Godfather",
        "genre": "Crime",
        "rating": 9.2
      }
    ]
  ```

#### 3.  Rate a Movie

**PUT** `/movies/:id/rate`

**Parameters**:

- `id` (number): The ID of the movie to rate.

Request Body:

```json
{
  "rating": 4.5
}
```

Response:

```json
{
  "id": 1,

  "title": "The Shawshank Redemption",

  "genre": "Drama",

  "rating": 9.3,

  "userRating": 4.5
}
```

#### 4. Get Movies Sorted by Rating

Returns all the movies sorted by rating, having the most popular movies in Top and the one with least ratings at bottom.

**GET** `/movies/sorted-by-rating`

Response:

```json
[
  {
    "id": 1,

    "title": "The Shawshank Redemption",

    "genre": "Drama",

    "rating": 9.3
  },

  {
    "id": 2,

    "title": "The Godfather",

    "genre": "Crime",

    "rating": 9.2
  }
]
