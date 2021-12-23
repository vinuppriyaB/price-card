import React from 'react';
import { useState } from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { SidebarData } from './SidebarData';
import {SubMenu} from "./SubMenu";


export const Sidebar = () => {
    const SidebarNav=styled.div`
    background:#4e73df;
    width:225px;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    position:fixed;
    top:0;
    font-size:20px;
    color:white;
    padding-top:10px;
    padding:20px;
    align-item:center;
    `
const SidebarWrap=styled.div`
    width:100%;

`       
const Sidebar=()=>{
    const [sidebar,setSidebar]=useState(false);
}
    return (
        <>
            <SidebarNav>
            <h5>SB ADMIN 2</h5>
            {SidebarData.map((item,index) => {
                return <SubMenu item={item} key={index}/>

            })}
            
            </SidebarNav>
        </>
    )
}


