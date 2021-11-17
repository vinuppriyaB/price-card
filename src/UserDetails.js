// import data from './mock-data.json';
import React, { useState,Fragment,useEffect } from 'react';

import { nanoid } from 'nanoid';
import { EditRow } from './EditRow';
import { AddUser } from './AddUser';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';

export function UserDetails(){
  
const history=useHistory();
const [contacts,setContacts]= useState([]);

const getuser=()=>{
    fetch("https://6188a6edd0821900178d7435.mockapi.io/user",
    {method:"GET",})
    .then((data)=>data.json())
    .then((detail)=>setContacts(detail));
           
  }
  useEffect(()=>getuser(),[])



  const deleteUser=(id)=>{
    fetch("https://6188a6edd0821900178d7435.mockapi.io/user/"+id,
    {method:"DELETE",}).then(()=>getuser())
          
  }


    return(
        <div className="display-details">
            
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
                    {contacts.map((contact,index)=>(
                        <tr>
                        <td>{contact.fullName}</td>
                        <td>{contact.address}</td>
                        <td>{contact.phoneNumber}</td>
                        <td>{contact.email}</td>
                        <td>
                            <div className="edit-btn">
                            <Button
                                variant="contained"
                                
                                onClick={() => {history.push("/user/edit/" + contact.id) 
                                }}
                                >
                                Edit
                            </Button>
                            
                            <Button
                                variant="contained"
                                onClick={(event) =>deleteUser(contact.id)}
                                >
                                Delete
                            </Button>

                            </div>
                            
                        </td>
                    </tr>
            
                      
                       
                        
                        
                    ))}
                    
                </tbody>
            </table>
           
            
        </div>

    );
} 


