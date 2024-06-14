import express from "express";
import bodyParser from "body-parser";
const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/", (req , res)=>{
    // const today = new Date();
    // const day = today.getDay();
    // let type = "A weekday"
    // let adv = "it's the time to work hard!";
    // if(day === 0  || day ===6){
    //     type = "the weekend"
    //     adv = "it's the time to have some fun"
    // }
    // res.render("index.ejs", {
    //     dayType : type, 
    //     advice : adv 
    // });
    const data = {
        title: "EJS Tags",
        seconds : new Date().getSeconds(),
        items : ["Apple" , "Banana" , "Cherry"],
        htmlContent : "<em>this is some em text</em>",
    }
    res.render("index.ejs" , data)
})
app.post("/login", (req, res)=>{
    let count = req.body["fname"].length + req.body["lname"].length;
    res.render("user.ejs" , {letterCount : count}
    )
})
app.listen(port , ()=>{
    console.log("Port started at port number" , port);
})