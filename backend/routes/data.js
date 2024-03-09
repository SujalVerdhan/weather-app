const express=require("express")
const app=express();
const router=express.Router();
const https=require("https")
router.post("/value",async function(req,res){
    const query=await req.body.cityName
    console.log(query)
    const key=process.env.API;
    units="Metric";
    try{
  const url="https://api.openweathermap.org/data/2.5/forecast?"+`&q=${query}`+"&units="+units+"&appid="+key;
      https.get(url,function(response){
         
         response.on("data",async function(data){
          const weatherdata=await JSON.parse(data)
          // const temp=weatherdata.main.temp;
          // const description=weatherdata.weather[0].description
          // const icon=weatherdata.weather[0].icon
          // const imageurl="https://openweathermap.org/img/wn/"+ icon +"@2x.png"
         
          // res.write("<p>The current weather condition is "+description+"</p>")
          // res.write("<h1>The current temperature in "+query+ "  is " +temp+" degrees celsius</h1>");
          // res.write("<img src="+imageurl+">")
          console.log(weatherdata)
          res.json({data:weatherdata});
         });
        
      })
    
  
  }catch(err){
  res.json({error:err})
  }
  })
  module.exports=router;