import mongoose from "mongoose";

/**
 * Defines the schema for a clause in the Arcus model.
 * @typedef {Object} ClauseSchema
 * @property {string} id - The unique identifier for the clause.
 * @property {string} Name - The name of the clause.
 * @property {string} PrimaryText - The primary text of the clause.
 * @property {string} Type - The type of the clause.
 */

/**
 * Defines the Arcus model.
 * @typedef {Object} ArcusModel
 * @property {function} model - The Mongoose model function.
 */

/**
 * The Mongoose schema for the Arcus model.
 * @type {ClauseSchema}
 */
const clauseSchema = mongoose.Schema({
  id: { type: String },
  Name: { type: String, required: true },
  PrimaryText: { type: String, required: true },
  Type: { type: String, required: true },
});

/**
 * The Mongoose model for the Arcus model.
 * @type {ArcusModel}
 */
const any = mongoose.model("any", clauseSchema, "any");

export default any;
