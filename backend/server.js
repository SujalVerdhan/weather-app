const express=require("express");
// const {chats}=require("./data/data")
require('dotenv').config()


const app=express();
const https=require("https")
const bodyparser=require("body-parser")
const data=require("./routes/data")
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json())
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000"),
  res.header(
      "Access-Control-Allow-Headers",
      "Origin,X-Requested-With, Content-Type, Accept "
  );
  next();

})
// app.post("/value",async function(req,res){
//   const query=await req.body.cityName
//   console.log(query)
//   const key="dace3ef897fa22eae176d3b3ac7cc760";
//   units="Metric";
//   try{
// const url="https://api.openweathermap.org/data/2.5/forecast?"+`&q=${query}`+"&units="+units+"&appid="+key;
//     https.get(url,function(response){
       
//        response.on("data",async function(data){
//         const weatherdata=await JSON.parse(data)
//         // const temp=weatherdata.main.temp;
//         // const description=weatherdata.weather[0].description
//         // const icon=weatherdata.weather[0].icon
//         // const imageurl="https://openweathermap.org/img/wn/"+ icon +"@2x.png"
       
//         // res.write("<p>The current weather condition is "+description+"</p>")
//         // res.write("<h1>The current temperature in "+query+ "  is " +temp+" degrees celsius</h1>");
//         // res.write("<img src="+imageurl+">")
//         console.log(weatherdata)
//         res.json({data:weatherdata});
//        });
      
//     })
  

// }catch(err){
// res.json({error:err})
// }
// })



app.use("/",data)
    
app.listen(5000,function(){
 console.log("Server is staryting on port 5000")
})
