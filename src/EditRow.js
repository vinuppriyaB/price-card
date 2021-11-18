import React from 'react';

import { useState,useEffect } from "react";

import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { Editform } from './Editform';

export const userValidationSchema = yup.object({
    fullName: yup.string().min(3, "too small").required("fill name"),
  
    address: yup.string().min(8, "too small").required("fill address"),
  
    phoneNumber: yup.string().required("fill Phone number")
    .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,'Phone number is not valid'),
  
    email: yup.string().min(5,"too small")
    .required("fill the email ")
    .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Patter not mathch"),
  
    
  });
  
  

export function EditRow() {
    const history=useHistory();
    const {id}=useParams();
    const [contact,setContact]=useState("");
    
           
            useEffect(()=>{
         fetch("https://6188a6edd0821900178d7435.mockapi.io/user/"+id)
        .then((data)=>data.json())
        .then((dlt)=>
            {
                
                setContact(dlt);
            
            })
        },[])

    return contact? <Editform contact={contact}/>:"";
        
           
}


