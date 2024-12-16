import { config } from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

config(); // Configure dotenv to load environment variables

import express from "express";
import cors from "cors";

//! Express instance
const app = express();

//! Middlewares
const corsOptions = {
  origin: ["http://localhost:5174", "http://localhost:5173"],
};
app.use(cors(corsOptions));
app.use(express.json());

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(process.env.KEY);

//! Generate content route
app.post("/grammar", async (req, res) => {
  const { prompt } = req.body;

  try {
    // Define the model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Ask the model to rephrase the input prompt
    const result = await model.generateContent(
      `you are very professional writer if this has any grammatical mistake then correct it and give output: ${prompt}`
    );
    const response = await result.response;
    const correctText = response.text();

    res.send({ original: prompt, rephrased: correctText });
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to process and rephrase the prompt");
  }
});

//! Start the server
app.listen(8080, () => console.log("Server is running"));
