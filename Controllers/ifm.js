import express from "express";
import mongoose from "mongoose";
import console from "console";

import Clauses from "../models/ifm.js";

/**
 * Retrieves all clauses from the database
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} - The retrieved clauses
 */
export const getClauses = async (req, res) => {
  try {
    const postClauses = await Clauses.find();

    console.log(postClauses);

    res.status(200).json(postClauses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * Creates a new clause in the database
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} - The newly created clause
 */
export const createClause = async (req, res) => {
  const clause = req.body;

  const newClause = new Clauses(clause);

  try {
    await newClause.save();

    res.status(201).json(newClause);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

/**
 * Updates a clause in the database
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} - The updated clause
 */
export const updateClause = async (req, res) => {
  const { id: _id } = req.params;
  const clause = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No clause with that id");

  const updatedClause = await Clauses.findByIdAndUpdate(_id, { ...clause, _id }, { new: true });

  res.json(updatedClause);
};

/**
 * Deletes a clause from the database
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} - A message indicating the post was deleted successfully
 */
export const deleteClause = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No clause with that id");

  await Clauses.findByIdAndRemove(id);

  res.json({ message: "Data deleted successfully" });
};
