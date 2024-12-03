# Library Management System

The **Library Management System** is a web application designed to manage users and books, allowing users to borrow and return books. The backend is built using **Node.js**, **Express.js**, and **Sequelize ORM**.

---

## **Setup**

### Requirements:
- **Node.js**: Version 20+
- **npm**: Version 10+
- **Microsoft SQL Server**

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/<username>/library-management-system.git
   cd library-management-system/backend

2. Install dependencies:
    ```bash
    npm install

3. Create a .env file in the root directory and configure it as follows:
    DB_HOST=localhost
    DB_USERNAME=your_username
    DB_PASSWORD=your_password
    DB_NAME=library_db
    DB_PORT=1433
    DB_DIALECT=mssql
    PORT=3000

4. Create the database and run migrations:
    ```bash
    npx sequelize-cli db:create
    npx sequelize-cli db:migrate

5. Start the application:
    ```bash
    npm start

## **Scripts**

The following scripts are available in the project:

- **`npm start`**: Starts the application in production mode. It runs the application using `server.js`.
  
- **`npm run dev`**: Starts the application in debug mode with **Nodemon**.
  
- **`npm test`**: Placeholder for future test scripts (currently useless).


## **Dependencies**

The following dependencies are used in the project:

| Package          | Version   | Purpose                                                                 |
|-------------------|-----------|-------------------------------------------------------------------------|
| `express`         | ^4.21.1   | Web framework for handling HTTP requests.                              |
| `body-parser`     | ^1.20.3   | Parses incoming JSON requests.                                         |
| `cors`            | ^2.8.5    | Enables Cross-Origin Resource Sharing (CORS).                         |
| `dotenv`          | ^16.4.6   | Manages environment variables securely.                                |
| `sequelize`       | ^6.37.5   | ORM for database interactions.                                         |
| `sequelize-cli`   | ^6.6.2    | Command-line tool for managing migrations and models.                 |
| `mssql`           | ^11.0.1   | Driver for Microsoft SQL Server.                                       |
| `joi`             | ^17.13.3  | Validates API request payloads.                                        |

### **DevDependencies**

| Package          | Version   | Purpose                                                                 |
|-------------------|-----------|-------------------------------------------------------------------------|
| `nodemon`         | ^3.1.7    | Automatically restarts the server during development on file changes.  |