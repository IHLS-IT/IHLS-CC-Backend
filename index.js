import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import process from "process";

import arcusRoutes from "./Routes/arcus.js";
import ussRoutes from "./Routes/uss.js";
import anyRoutes from "./Routes/any.js";
import ifmRoutes from "./Routes/ifm.js";
import cppibRoutes from "./Routes/cppib.js";
import mvCreditRoutes from "./Routes/mvCredit.js";
import solonRoutes from "./Routes/solon.js";

const app = express();
dotenv.config({ path: "./.env" });

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, World! This is the root path.");
});

app.use("/arcus", arcusRoutes); 
app.use("/uss", ussRoutes);
app.get("/any", anyRoutes);
app.use("/ifm", ifmRoutes);
app.use("/cppib", cppibRoutes);
app.use("/mvCredit", mvCreditRoutes);
app.use("/solon", solonRoutes);

const PORT = process.env.PORT || 8080;
console.log(`Server will run on port: ${PORT}`); // Add this line to check the PORT value

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

