import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData=[
    {
        title:"Dashboard",
        path:"/",
        icon:<RiIcons.RiSettings3Fill/>,
        // iconClosed:<RiIcons.RiArrowDownSFill/>,
        // iconOpened:<RiIcons.RiArrowUpSFill/>,
        
    },
    {
        title:"Interface",
    },
    {
        title:"Components",
        path:"/components",
        icon:<RiIcons.RiSettings3Fill/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title:"Buttons",
                path:"/components/dashboard",
                
            },
            {
                title:"Cards",
                path:"/components/dashboard",
                
            }
        ]
    },
    {
        title:"Utilities",
        path:"/Utilities",
        icon:<RiIcons.RiSettings3Fill/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title:"Colors",
                path:"/Utilities/color",
               
            },
            {
                title:"Boarders",
                path:"/Utilities/boarder",
               
            },
            {
                title:"Animations",
                path:"/Utilities/animation",
                
            },
            {
                title:"Others",
                path:"/Utilities/other",
            }
        ]
    },
    {
        title:"Addons",
    },
    {
        title:"Pages",
        path:"/pages",
        icon:<AiIcons.AiFillFolder/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
    },
    {
        title:"charts",
        path:"/charts",
        icon:<AiIcons.AiOutlineAreaChart/>,
        
    },
    {
        title:"Table",
        path:"/table",
        icon:<FaIcons.FaTable/>,
       
    }
]