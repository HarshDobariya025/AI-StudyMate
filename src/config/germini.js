// const apiKey = "AIzaSyAIlBaMQbzn8Ppnm6Tne0e7X3q32esSzQo";

// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
// } = require("@google/generative-ai");

// //   const apiKey = process.env.GEMINI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//     model: "gemini-2.0-flash-exp",
// });

// const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 40,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
// };

// export default chatSession = model.startChat({
//     generationConfig,
//     history: [
//     ],
// });


// const { GoogleGenerativeAI } = require("@google/generative-ai"); // for type: "commonjs"
import { GoogleGenerativeAI } from "@google/generative-ai"; // for type: "module"
// import dotenv from "dotenv";

// dotenv.config();
const apiKey = "AIzaSyDQQji4Z85M133IPdAX3NoR4C3IagyiB-Q";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro-002",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const chatSession = model.startChat({ generationConfig });