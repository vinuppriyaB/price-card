import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useHistory } from 'react-router';

export function AddUser() {
    const history=useHistory();
   
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
    const addUser = () => {  
        const newUser={ fullName, address,phoneNumber, email}; 
       
        fetch("https://6188a6edd0821900178d7435.mockapi.io/user",
    {
        method:"POST",
        body: JSON.stringify(newUser),
        headers:{"Content-Type":"application/json"},
    }).then(()=>{
        history.push("/user");
        resetUserForm();
       
       
  }).catch((e)=> console.log("ERROR"))  
}


    return (
        <div className="input_field">
        <h1>Add User Details</h1>
        
            
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
                onClick={() => {addUser()
                }}
                >
                ADD details
            </Button>
           
            </div>

        
    );
}
