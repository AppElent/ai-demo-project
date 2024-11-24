import { PromptTemplate } from "@langchain/core/prompts";
import { Ollama } from "@langchain/ollama";

const template = PromptTemplate.fromTemplate(`Tell me a joke`);

const llm = new Ollama({
  model: "nuextract", // Default value
  temperature: 0,
  maxRetries: 2,
  // other params...
});

const chain = template.pipe(llm);

const result = await chain.invoke();

console.log(result);
