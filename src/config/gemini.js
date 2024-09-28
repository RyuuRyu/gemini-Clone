/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = import.meta.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI("AIzaSyCLnOqd1IYt2l3HJYPnmLXwDT6jyKdo9ek");

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
];

async function run(input) {
  const chatSession = model.startChat({
    generationConfig,
    safetySettings,
    history: [],
  });

  const result = await chatSession.sendMessage(input);
  const response = await result.response.text(); // Await the text method here

  return response; // Now return the response as a string
}

/* async function run(input) {
  // Accept prompt or input as an argument
  const chatSession = model.startChat({
    generationConfig,
    safetySettings,
    history: [],
  });

  const result = await chatSession.sendMessage(input); // Use input instead of undefined prompt
  const response = result.response;
  console.log(response.text());

  return result.response.text;
} */

export default run;
