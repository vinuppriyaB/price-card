import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import "./dashboard.css";
import styled from "styled-components";

const Progressbar=styled.div`
   
    width: 50%;
    height: 12px;
    background-color: rgb(18, 175, 196);
    text-align: center;
    line-height: 25px;
    color: white;
    border-radius: 5px;
`;
const Progress=styled.div`
width: 100%;
background-color: #ddd;
border-radius: 5px;
`;
export const Detailbox = () => {
    const data=[
        {
           title:"EARNINGS (MONTHLY)",
           price:"$40,000",
           color:"blue",
           icon:<BsIcons.BsFillCalendarFill className="icon"/>,
        },
        {
            title:"EARNINGS (ANNUAL)",
            price:"$215,000",
            color:"green",
            icon:<FaIcons.FaDollarSign className="icon"/>,
         },
         {
            title:"TASKS",
            price:"50%",
            bar:<Progress><Progressbar/></Progress>,
            color:"rgb(18, 175, 196)",
            icon:<FaIcons.FaClipboardList className="icon"/>,
         },
         {
            title:"PENDING REQUESTS",
            price:"18",
            color:"orange",
            icon:<FaIcons.FaComments className="icon"/>,
         },
    ]

    
    return (
        <div className="box-container">
       
       
        {data.map((item,index)=>(
                <Box 
                item={item}
                key={index}
                />
        ))}
        </div>
    )
}

function Box({item}){
    const Detailbox=styled.div`
    height:100px;
    width:390px;
   
    border-left:4px solid ${item.color};
    border-radius:5px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    background:white;
    background:white;
    padding:25px 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
   
`;
    return(
        
        <Detailbox>
        <div className="box-content">
        <p style={{color:item.color}}>{item.title}</p>
        <h5>{item.price}  <div className="box-progressbar">{item.bar} </div></h5>
        </div>
       
        <div className="box-icon">
        <div>{item.icon}</div>
        </div>
        </Detailbox>
       
        
    )
}




