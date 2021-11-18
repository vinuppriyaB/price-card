import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useHistory } from 'react-router';
import { useFormik } from "formik";
import * as yup from "yup";

const userValidationSchema = yup.object({
    fullName: yup.string().min(3, "too small").required("fill name"),
  
    address: yup.string().min(8, "too small").required("fill address"),
  
    phoneNumber: yup.string().required("fill Phone number")
    .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,'Phone number is not valid'),
  
    email: yup.string().min(5,"too small")
    .required("fill the email ")
    .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Patter not mathch"),
  
    
  });
  

export function AddUser() {
    const history = useHistory();
    const addUser = (newUser) => {  
        fetch("https://6188a6edd0821900178d7435.mockapi.io/user",
    {
        method:"POST",
        body: JSON.stringify(newUser),
        headers:{"Content-Type":"application/json"},
    }).then(()=>{
        history.push("/user");
  }).catch((e)=> console.log("ERROR"))  
}

const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: { fullName:"",address:"",phoneNumber:"",email:""},
      validationSchema: userValidationSchema,
      onSubmit: (newUser) => {
        console.log("submit", newUser);
        addUser(newUser);
      },
    });


    return (
        <form className="input_field" onSubmit={ handleSubmit}>
        <h1>Add User Details</h1>
        
            
            <TextField 
                name="fullName"  
                id="fullName" 
                label="Name" 
                variant="outlined" 
                 onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
                error={errors.fullName && touched.fullName}
                helperText={errors.fullName && touched.fullName && errors.fullName}
               
            />
            <TextField 
                name="address" 
                id="address" 
                label="Address" 
                variant="outlined" 
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.address && touched.address}
                helperText={errors.address && touched.address && errors.address}
               
            />
            <TextField 
                name="phoneNumber" 
                id="phoneNumber" 
                label="Phone Number" 
                variant="outlined" 
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.phoneNumber && touched.phoneNumber}
                helperText={errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                
            />
            <TextField 
                name="email" 
                id="email" 
                label="Email" 
                variant="outlined" 
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email && touched.email}
                helperText={errors.email && touched.email && errors.email}
               
            />
            <Button 
                type="submit"
                variant="contained"
                >
                ADD details
            </Button>
           
            </form>

        
    );
}
