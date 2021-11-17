import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState,useEffect } from "react";

import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

export function EditRow() {
    const history=useHistory();
    const {id}=useParams();
    const [contact,setContact]=useState("");
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    
    const resetUserForm = (event) => {
        setFullName("");
        setAddress("");
        setPhoneNumber("");
        setEmail("");
            
        };


        useEffect(()=>{
            fetch("https://6188a6edd0821900178d7435.mockapi.io/user/"+id)
        .then((data)=>data.json())
        .then((dlt)=>
            {setContact(dlt);
              setFullName(dlt.fullName);
              setAddress(dlt.address);
              setPhoneNumber(dlt.phoneNumber);
              setEmail(dlt.email);
              
            })
          },[])
         
        
                const editUser = () => {
                      
                      const updated_detail={ fullName, address,phoneNumber, email }
                      fetch("https://6188a6edd0821900178d7435.mockapi.io/user/"+id,
                      {
                          method:"PUT",
                          body: JSON.stringify(updated_detail),
                          headers:{"Content-Type":"application/json"},
                      }).then(()=>{
                          history.push("/user");
                          resetUserForm();
                      }).catch((e)=> console.log("ERROR"))  
                      
                      
                     
                      resetUserForm();
                    };  



    return (
        <div className="input_field">
        <h1>Edit User Details</h1>
        
            
            <TextField 
                name="fullName"  
                id="outlined-basic" 
                label="Name" 
                variant="outlined" 
                value={fullName}
                onChange={event => setFullName(event.target.value)}
            />
            <TextField 
                name="address" 
                id="outlined-basic" 
                label="Address" 
                variant="outlined" 
                value={address}
                onChange={event => setAddress(event.target.value)}
            />
            <TextField 
                name="phoneNumber" 
                id="outlined-basic" 
                label="Phone Number" 
                variant="outlined" 
                value={phoneNumber}
                onChange={event => setPhoneNumber(event.target.value)}
            />
            <TextField 
                name="email" 
                id="outlined-basic" 
                label="Email" 
                variant="outlined" 
                value={email}
                onChange={event => setEmail(event.target.value)}
            />
            <Button 
                variant="contained"
                onClick={() => {editUser()
                }}
                >
                save details
            </Button>
           
            </div>

    );
}
