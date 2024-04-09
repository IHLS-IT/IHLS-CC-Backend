/**
 * This module defines the schema for the 'uss' collection in the MongoDB database and exports the 'uss' model.
 * @module uss
 */

import mongoose from "mongoose";

/**
 * Defines the schema for the 'uss' collection in the MongoDB database.
 * @param {String} id - The unique identifier for the clause.
 * @param {String} Name - The name of the clause.
 * @param {String} PrimaryText - The primary text of the clause.
 * @param {String} Type - The type of the clause.
 */
const clauseSchema = mongoose.Schema({
  id: { type: String },
  Name: { type: String, required: true },
  PrimaryText: { type: String, required: true },
  Type: { type: String, required: true },
});

/**
 * Defines the 'uss' model using the clauseSchema and exports it.
 */
const uss = mongoose.model("uss", clauseSchema, "uss");
export default uss;
