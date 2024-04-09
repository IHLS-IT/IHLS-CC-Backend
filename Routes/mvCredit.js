// Importing the express module
import express from "express";

// Importing the controller functions for handling HTTP requests
import { getClauses, createClause, updateClause, deleteClause } from "../Controllers/mvCredit.js";

// Creating an instance of the express router
const router = express.Router();

// Defining the HTTP routes and their corresponding controller functions
router.get("/", getClauses); // GET request to retrieve all clauses
router.post("/", createClause); // POST request to create a new clause
router.patch("/:id", updateClause); // PATCH request to update an existing clause
router.delete("/:id", deleteClause); // DELETE request to delete an existing clause

// Exporting the router to be used in other parts of the application
export default router;
