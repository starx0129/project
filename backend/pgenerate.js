import { config } from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Configure dotenv to load environment variables
config();

import express from "express";
import cors from "cors";

//!Express instance
const app = express();

//!Middlewares
const corsOptions = {
  origin: ["http://localhost:5174", "http://localhost:5173"],
};
app.use(cors(corsOptions));
app.use(express.json());

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.KEY);

//!Generate content route
app.post("/pgenerate", async (req, res) => {
  const { prompt } = req.body;
  try {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const temperature = 0.1;

    const result = await model.generateContent(prompt, { temperature });
    const response = await result.response;
    const text = response.text();
    res.send(text);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to generate content");
  }
});

//!Start the server
app.listen(8080, () => console.log("Server is running"));
