
import {test,expect} from "@playwright/test";
import strict from "node:assert/strict";

test('test for google application title and url validation', async({page}) => {

    //open app
    await page.goto("https://www.google.com/");

    //get the title title()
   const apptitle:string=await page.title();

   // validate title
   if (apptitle==="Google")
    
    {
        console.log("title Matched");

    }
    else
    {
        console.log("title not matched");
    }
//validate current url
let appUrl:string=page.url();


//Validate full url
await expect(page).toHaveURL("https://www.google.com/");

console.log("url is matched...."+appUrl);
//Validate partial and full url

await expect(page).toHaveURL(/google/);
console.log("partial url is matched.."+appUrl);


//varialbe level
await expect(appUrl).toBe("https://www.google.com/");

expect(appUrl).toContain("google.com");

//validate full url with base page level assertion

await expect(page).toHaveURL("https://www.google.com/");
console.log("Full url matched...."+appUrl)
});
