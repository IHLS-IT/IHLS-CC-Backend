// Importing the express module
import express from "express";

// Importing the controller functions for handling the routes
import { getClauses, createClause, updateClause, deleteClause } from "../Controllers/uss.js";

// Creating a new router instance
const router = express.Router();

// Defining the routes and their corresponding controller functions
router.get("/", getClauses); // Route for getting all clauses
router.post("/", createClause); // Route for creating a new clause
router.patch("/:id", updateClause); // Route for updating an existing clause
router.delete("/:id", deleteClause); // Route for deleting an existing clause

// Exporting the router instance
export default router;
