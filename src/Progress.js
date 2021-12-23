import { buildQueries } from "@testing-library/react"
import reactDom from "react-dom"
import "./dashboard.css"

export function Progress(){
    const value=[
        {
            name:"Server Migration",
            per:"20%",
            color:"darkred",
        },
        {
            name:"Sales Tracking",
            per:"40%",
            color:"rgb(24, 109, 221)",
        },
        {
            name:"Customer Database",
            per:"60%",
            color:"rgb(9, 156, 144)",
        },
        {
            name:"Payout Details",
            per:"80%",
            color:"orange",
        },
    ]

    return(
       
            <div className="content">

            

            {
                value.map((e)=>(
                <div>
                    <div className="title">
                    <div>{e.name}</div>
                    <div>{e.per}</div>
                    </div>
                    <div className="myProgress">
                    <div className="myBar" style={{width:e.per,backgroundColor:e.color}}></div>
                    </div>
                </div>

                ))
            }
            <div className="title">
                <div>Account Setup</div>
                <div>complete</div>
            </div>
            <div className="myProgress">
            <div className="myBar" style={{width:"100%"}}></div>
            </div>
            </div>
            
       
        


    )
}