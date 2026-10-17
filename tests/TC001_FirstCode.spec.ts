
//add test runner
import {test} from "@playwright/test";





test("for the google application launch",async({page})=>{

// go to open google application
await page.goto("https://www.google.com/");
//get the page title
console.log("application title is:"+await page.title());


})