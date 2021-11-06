import data from './mock-data.json';
import React, { useState,Fragment } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid';

export function UserDetails(){
const [contacts,setContacts]= useState(data);

const [addFormdata,setAddFormdata] =useState({
    fullName:"",
    address:"",
    phoneNumber:"",
    email:""
})
const [editFormdata,setEditFormdata] =useState({
    fullName:"",
    address:"",
    phoneNumber:"",
    email:""
})
const [editContactId,setEditContactId]=useState(null);

const handleAddFormdata=(event)=>
{
    event.preventDefault();
    const fieldname=event.target.getAttribute("name");
    const fieldvalue=event.target.value;
    const newFormData={...addFormdata};
    newFormData[fieldname]=fieldvalue;
    setAddFormdata(newFormData)
}
const handleAddFormSubmit=(event)=>
{
    event.preventDefault();
    const newContact={
        id:nanoid(),
        fullName:addFormdata.fullName,
        address:addFormdata.address,
        phoneNumber:addFormdata.phoneNumber,
        email:addFormdata.email
    }
    const newContacts=[...contacts,newContact];
    setContacts(newContacts);
    console.log(contacts);
}
const handleEditFormchange=(event)=>{
    event.preventDefault();
    const fieldname=event.target.getAttribute("name");
    const fieldvalue=event.target.value;
    const newFormData={...editFormdata};
    newFormData[fieldname]=fieldvalue;
  setEditFormdata( newFormData)
    

}
const handleEditFormSubmit=(event)=>
{
    event.preventDefault();
    const editedContact={
        id:editContactId,
        fullName:editFormdata.fullName,
        address:editFormdata.address,
        phoneNumber:editFormdata.phoneNumber,
        email:editFormdata.email
    }
    const newContacts=[...contacts];
    const index=contacts.findIndex((contact)=>contact.id===editContactId);
    newContacts[index]=editedContact;
    setContacts(newContacts);
    setEditContactId(null);

}

const handleEditClick=(event,contact)=>{
    event.preventDefault();
    console.log(contact.id);
    setEditContactId(contact.id);
    console.log(editContactId);
    const formvalues={
        fullName:contact.fullName,
    address:contact.address,
    phoneNumber:contact.phoneNumber,
    email:contact.email,

    }
    setEditFormdata(formvalues)

}
const handleDeleteClick=(event,contact)=>{
    event.preventDefault();
   
    setContacts(contacts.filter(user=> contact.id!==user.id))

}

    return(
        <div className="display-details">
            <form >
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Action</th>

                    </tr>

                </thead>
                <tbody>
                    {contacts.map((contact)=>(
                        <Fragment>
                            {editContactId===contact.id ? <EditRow contact={contact}  editFormdata={editFormdata} handleEditFormchange={handleEditFormchange} handleEditFormSubmit={handleEditFormSubmit} />
                            : <AddUser contact={contact} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>}
                             
                            

                        </Fragment>
                       
                        
                        
                    ))}
                    
                </tbody>
            </table>
            </form>
            <h1>Add User Details</h1>
            <form >
            <TextField 
                name="fullName"  
                id="outlined-basic" 
                label="Name" 
                variant="outlined" 
                onChange={handleAddFormdata}
            />
            <TextField 
                name="address" 
                id="outlined-basic" 
                label="Address" 
                variant="outlined" 
                onChange={handleAddFormdata}
            />
            <TextField 
                name="phoneNumber" 
                id="outlined-basic" 
                label="Phone Number" 
                variant="outlined" 
                onChange={handleAddFormdata}
            />
            <TextField 
                name="email" 
                id="outlined-basic" 
                label="Email" 
                variant="outlined" 
                onChange={handleAddFormdata}
            />
            <Button 
                variant="contained"
                onClick={handleAddFormSubmit}
                >
                ADD details
            </Button>
            </form>
        </div>

    );
} 

function AddUser({contact,handleEditClick,handleDeleteClick}){
    
    return (
        
        <tr>
            <td>{contact.fullName}</td>
            <td>{contact.address}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>
            <td>
            <Button 
                variant="contained"
                onClick={(event)=>handleEditClick(event,contact)}>
                Edit
            </Button>
            <Button 
                variant="contained"
                onClick={(event)=>handleDeleteClick(event,contact)}>
               Delete
            </Button>
            </td>
        </tr>

    );
}
function EditRow({editFormdata,handleEditFormchange,handleEditFormSubmit}){
    return(
        <tr>
            <td>
            <TextField 
                name="fullName"  
                id="standard-basic" 
                label="Name" 
                variant="standard" 
                value={editFormdata.fullName}
                onChange={(event)=>handleEditFormchange(event)}
               
            />
            </td>
            <td>
            <TextField 
                name="address" 
                id="standard-basic" 
                label="Address" 
                variant="standard" 
                value={editFormdata.address}
                onChange={(event)=>handleEditFormchange(event)}
                
            />
            </td>
            <td>
            <TextField 
                name="phoneNumber" 
                id="standard-basic" 
                label="Phone Number" 
                variant="standard" 
                value={editFormdata.phoneNumber}
                onChange={(event)=>handleEditFormchange(event)}
                
            />
            </td>
            <td>
            <TextField 
                name="email" 
                id="standard-basic" 
                label="Email" 
                variant="standard" 
                value={editFormdata.email}
                onChange={(event)=>handleEditFormchange(event)}
              
            />
            </td>
            <td>
            <Button 
                variant="contained"
                onClick={(event)=>handleEditFormSubmit(event)}
                >
                save
            </Button>
            

            </td>
        </tr>
    )
}