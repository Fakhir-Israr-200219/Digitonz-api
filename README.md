# API Setup and Usage Guide

## Environment Variables
Before running the application, set up the following environment variables in a `.env` file:

```env
PORT=5000
CONNECTION_STRING=mongodb://localhost:27017/Tutorials
ACCESS_TOKEN_SECRIT=myToken
```

### Explanation of Variables:
- **PORT**: The port on which the server will run.
- **CONNECTION_STRING**: The MongoDB connection string pointing to the database.
- **ACCESS_TOKEN_SECRIT**: The secret key used for generating access tokens.

## Installation and Running the Server

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd <your-project-folder>
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the server:
   ```sh
   npm start
   ```

   The server will start on `http://localhost:5000` (or the port defined in the `.env` file).

## Import Postman Collection
To test all API routes using Postman:

1. Open Postman.
2. Click on **Import**.
3. Select the provided `postman_collection.json` file.
4. Click **Import**.
5. Use the imported collection to test API endpoints.

---

Now you are ready to use and test your API! 🚀

