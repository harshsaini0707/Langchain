import {ChatGoogleGenerativeAI} from '@langchain/google-genai'
import {ChatPromptTemplate ,  MessagesPlaceholder} from '@langchain/core/prompts'
import { HumanMessage , AIMessage , } from '@langchain/core/messages'
import "dotenv/config"
async function main(){
    try {
        const llm =  new ChatGoogleGenerativeAI({
            model:"gemini-1.5-flash",
            temperature:0.7
        })

        const prompt = ChatPromptTemplate.fromMessages([
            ["system" , "Your are a cracked developer and build to solve developer query "],
              // The placeholder will be filled with an array of messages
            new MessagesPlaceholder("chat_history"),
            ["human" , "{input}"]
        ])


        // 2. Create a sample chat history as an array of message objects
  const chatHistory = [
    new HumanMessage("What is the capital of France?"),
    new AIMessage("The capital of France is Paris."),
  ];

  // 3. Format the prompt, providing values for both the history and the new input
  const formattedPrompt = await prompt.formatMessages({
    chat_history: chatHistory,
    input: "What is a famous landmark there?",
  });

  console.log(formattedPrompt);

  const response = await llm.invoke(formattedPrompt);
  console.log(response.content);
  
    } catch (error) {
        console.log(error);
        
    }
}

main();