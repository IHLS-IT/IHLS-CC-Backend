import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import process from "process";

import arcusRoutes from "./routes/arcus.js";
import ussRoutes from "./routes/uss.js";
import anyRoutes from "./routes/any.js";
import ifmRoutes from "./routes/ifm.js";
import cppibRoutes from "./routes/cppib.js";
import mvCreditRoutes from "./routes/mvCredit.js";
import solonRoutes from "./routes/solon.js";

const app = express();
dotenv.config({ path: "./.env" });

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", () => {
  res.send("Hello, World! This is the root path.");
});

app.use("/arcus", arcusRoutes);
app.use("/uss", ussRoutes);
app.get("/any", anyRoutes);
app.use("/ifm", ifmRoutes);
app.use("/cppib", cppibRoutes);
app.use("/mvCredit", mvCreditRoutes);
app.use("/solon", solonRoutes);

const PORT = process.env.PORT;
mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));