import express from "express";

import { getClauses, createClause, updateClause, deleteClause } from "C:/Users/DylanMcDonald/IHLS CC/IHLS CC/server/Controllers/clause.js";

const router = express.Router();

router.get("/", getClauses);
router.post("/", createClause);
router.patch("/:id", updateClause);
router.delete("/:id", deleteClause);

export default router;