# Dependencies Wiki

This document lists the dependencies used in the Library Management System project and explains their purposes.

---

## Installed Dependencies

### 1. express
- **Purpose:** A web framework for Node.js, used to create the API structure and handle HTTP requests.

---

### 2. body-parser
- **Purpose:** Parses incoming request bodies in JSON format, making it easier to handle POST and PUT requests.

---

### 3. cors
- **Purpose:** Enables Cross-Origin Resource Sharing (CORS), allowing the API to handle requests from different domains.

---

### 4. dotenv
- **Purpose:** Loads environment variables from a `.env` file, ensuring sensitive information like database credentials are securely managed.

---

### 5. nodemon
- **Purpose:** Automatically restarts the server whenever file changes are detected during development.
---

### 6. sequelize
- **Purpose:** A promise-based ORM for Node.js that supports database operations and model management.

---

### 7. sequelize-cli
- **Purpose:** Command-line interface for Sequelize to manage models, migrations, and seeders.

---

### 8. mssql
- **Purpose:** Driver for connecting and interacting with Microsoft SQL Server databases.
---

### 9. joi
- **Purpose:** Joi is used for schema validation of incoming API request bodies, ensuring that the data is valid before processing.
---

## Sequelize CLI Setup

The following command initializes the Sequelize project structure:

```bash
npx sequelize-cli init