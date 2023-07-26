import express, { Request, Response } from "express";
import { dbConnection } from "./config/connection";
import dotenv from "dotenv";
import routes from "./routes";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
dbConnection();

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log("Server listening on port 3001");
});

export default app;
