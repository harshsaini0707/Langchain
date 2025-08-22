import {ChatGoogleGenerativeAI} from "@langchain/google-genai"
import {ChatPromptTemplate} from "@langchain/core/prompts"

import "dotenv/config";


const main = async() =>{
    try {

        const llm = new ChatGoogleGenerativeAI({
            model:"gemini-1.5-flash",
            temperature:1, 
        })

        //Chat PromptTemplates

        // 1. Create a prompt template with a placeholder variable {topic}
        const prompt = ChatPromptTemplate.fromMessages([
            ["system" , "Your a bussines and Saas assitant"],
            ["user" , "Tell me a Saas product idea for $100k MRR {topic}"]
        ])

          // 2. Format the prompt with a real value
        const fromattedPrompt = await prompt.formatMessages({
            topic : "Developer Community"
        })

         // 3. Invoke the model with the formatted prompt

         const res =  await llm.invoke(fromattedPrompt);
         console.log(res.content);
         
        


        
    } catch (error) {
       console.log(error);
        
    }
}

//main()

//String Prompt 
import { PromptTemplate } from "@langchain/core/prompts";

async function XAIN() {

    const llm = new ChatGoogleGenerativeAI({
        model:"gemini-1.5-flash",
        temperature:1
    })
 
  const templateString = "Tell me a fun fact about {topic}.";

  // 2. Create the PromptTemplate instance
  const prompt = PromptTemplate.fromTemplate(templateString);

  // 3. Format the prompt with a specific value
  const formattedPrompt = await prompt.format({
    topic: "the planet Mars",
  });

  const response = await llm.invoke(formattedPrompt);
  console.log(response.content);
  
}

XAIN();