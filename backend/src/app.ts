import "reflect-metadata";
import dotenv from "dotenv";
if (process.env.NODE_ENV == "test") {
  dotenv.config({ path: ".env.testing" });
} else {
  dotenv.config();
}
import express from "express";
import DatabaseServiceProvider from "@/providers/database.provider";

// Register the providers.
const providers = [DatabaseServiceProvider];
providers.forEach((provider) => new provider().register());

// Create an express app.
const app = express();

// Parse the application/json request body.
app.use(express.json());

// Parse the x-www-form-urlencoded request body.
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.json({ message: "Home, Sweet Home." });
});

export default app;
