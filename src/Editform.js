import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { userValidationSchema } from './EditRow';


export function Editform({ contact }) {
    // console.log("editform" + contact);

    const history = useHistory();
    const { id } = useParams();

    const addUser = (newUser) => {
        fetch("https://6188a6edd0821900178d7435.mockapi.io/user/" + id,
            {
                method: "PUT",
                body: JSON.stringify(newUser),
                headers: { "Content-Type": "application/json" },
            }).then(() => {
                history.push("/user");
            }).catch((e) => console.log("ERROR"));
    };

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: { fullName: contact.fullName, address: contact.address, phoneNumber: contact.phoneNumber, email:contact.email },
        validationSchema: userValidationSchema,
        onSubmit: (newUser) => {
            // console.log("submit", newUser);
            addUser(newUser);
        },
    });

    return (
        <form className="input_field" onSubmit={ handleSubmit}>
            <h1>Edit User Details</h1>


            <TextField
                name="fullName"
                id="fullName"
                label="Name"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
                error={errors.fullName && touched.fullName}
                helperText={errors.fullName && touched.fullName && errors.fullName} />
            <TextField
                name="address"
                id="address"
                label="Address"
                variant="outlined"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.address && touched.address}
                helperText={errors.address && touched.address && errors.address} />
            <TextField
                name="phoneNumber"
                id="phoneNumber"
                label="Phone Number"
                variant="outlined"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.phoneNumber && touched.phoneNumber}
                helperText={errors.phoneNumber && touched.phoneNumber && errors.phoneNumber} />
            <TextField
                name="email"
                id="email"
                label="Email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email && touched.email}
                helperText={errors.email && touched.email && errors.email} />
            <Button
            type="submit"
                variant="contained"
               
            >
                save details
            </Button>

        </form>

    );
}
