import {ChatGoogleGenerativeAI} from "@langchain/google-genai"
import "dotenv/config";


async function main(){
 
    const llm  = new ChatGoogleGenerativeAI({
     model:"gemini-1.5-flash",
     temperature: 0.7,
    })

    //call 
    const response = await llm.invoke("Suggest me some Saas ideas")
    console.log(response.content);
    

}

main();
