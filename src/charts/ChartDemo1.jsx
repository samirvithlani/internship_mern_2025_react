import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar, Pie, Scatter } from "react-chartjs-2";
import { data } from "react-router-dom";
import { ArcElement, BarElement, CategoryScale, Chart, LinearScale, PointElement } from "chart.js";

Chart.register(CategoryScale,LinearScale,BarElement,ArcElement,PointElement)

export const ChartDemo1 = () => {

    const [chartData, setchartData] = useState({
        labels:[],
        datasets:[
            {
                label:"Loading...",
                data:[],
                borderColor:"blue",
                borderWidth:2,
                backgroundColor:["red","blue","green"]

            }
        ]
    })

    useEffect(()=>{
        getUserData()
    },[])

    const getUserData = async()=>{

        const res = await axios.get("https://node5.onrender.com/user/user")
        console.log(res.data.data)
        setchartData({
            labels:res.data.data?.map((user)=>user.name || "N/A"),
            datasets:[
                {
                    label:"Users",
                    data:res.data.data?.map((user)=>user.age || 0),
                    borderColor:"blue",
                    borderWidth:2,
                    backgroundColor:["red","green","blue","yellow"]
                }
            ]
        })

    }



  return <div style={{ textAlign: "center" }}>
    <h1>CHART DEMO </h1>
    {/* <Bar data={chartData}></Bar> */}
    {/* <Pie data={chartData}></Pie> */}
    <Scatter data={chartData}></Scatter>
  </div>;
};
