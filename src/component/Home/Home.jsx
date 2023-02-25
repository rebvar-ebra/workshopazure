import React, { useState, useEffect } from "react";
import Events from "./events/Events";
import { dataApi } from './data'

function Home() {
    const [data,setData]=useState([])

    useEffect(()=>{
        const data = dataApi
        setData(data);
    },[])
  return (
    <div className="flex justify-center m-1 overflow-hidden" >
        <Events  data={data}/>
    </div>
  )
}

export default Home