import React, { useState } from "react"
;

import Box from '@mui/material/Box';
import { TextField } from "@mui/material";

function Homepage(){

  const[city,setCity]=useState("")
  const[value,setValue]=useState("")


  const handleChange=(e)=>{
     setCity(e.target.value);
  }



  const getdata=async(lat,lon)=>{
  const res=fetch(`https://api.openweathermap.org/value/2.5/onecall?lat=${lat}&lon=${lon}&appid=dace3ef897fa22eae176d3b3ac7cc760`)
  const json=await res.json();
  console.log(json)
  }


const handle=async()=>{
  console.log(city)
const res=await fetch("http://localhost:5000/value",{
  method:"POST",
  headers:{
    'Content-Type':"application/json"
  },
  body:JSON.stringify({cityName:city})
})
const json=await res.json();
console.log(json)


  setValue(json.data)
  console.log(value)

// setdata(await res.json())
// console.log(json.data)

// const lat=value.city.coord.lat;
// const lon=value.city.coord.lon;
// getdata(lat,lon)
}





    return (<Box sx={{width:"90%",maxWidth:"470px",margin:"100px auto 0", border:"2px solid black",textAlign:"center", background:"linear-gradient(135deg,#00feba,#5b548a)",padding:"40px 35px",color:"#fff",borderRadius:"20px"}}>
    {/* <input  type="text" name="cityName" onChange={handleChange} placeholder="Enter your city name"></input> */}
    <div className="search">
    <input  style={{textalign:"center",border:"0",outline:"0",background:"#ebfffc",color:"#555",padding:"10px 25px",height:"30px",borderRadius:"30px",flex:"1",marginRight:"16px", fontSize:"18px"}} id="outlined-search" variant="standard" type="text" name="cityName" onChange={handleChange} placeholder="Enter your city name" label="Enter City"  />
    <button onClick={handle}>Go</button>
    </div>

    {value==""?null:(value.message)?<div style={{color:"red"}}>City not found</div>
    :
      
    <div className="weather">
    <img src={"https://openweathermap.org/img/wn/"+ value.list[0].weather[0].icon +"@2x.png" }
        ></img>
        <p style={{fontSize:"2rem"}}><em>{value.list[0].weather[0].description}</em></p>
    <p style={{color: "#fff",
    fontSize: "102px",
    fontWeight: "900",
    margin: "8px 0px",
    textShadow:" 2px 10px rgba(0, 0, 0, 0.75)"}}>{value.list[0].main.temp}°c
    </p>
    <p style={{fontSize:"2rem"}}>{value.city.name} "{value.city.country}"</p>
    <p style={{fontSize:"2rem"}}>{(value.list[0].dt_txt).slice(0,10)}</p>
    </div>}
    </Box>)
}
export default Homepage;