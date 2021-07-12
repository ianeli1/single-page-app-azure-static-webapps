import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import fetch from "node-fetch"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const response = await fetch('https://rick-and-morty-api-phrases.herokuapp.com/phrases/en_us/random')
    const json = await response.json()

     context.res.json({
        text: json.phrase
    });

};

export default httpTrigger;