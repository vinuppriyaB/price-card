
import './App.css';
import { PriceCard } from './PriceCard';




import {  useState } from "react";
import { Switch, Route,  Redirect } from "react-router-dom";
// import Card from "@mui/material/Card";


 
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
 import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Mode } from "@mui/icons-material";
import HomeIcon from '@mui/icons-material/Home';
import {UserDetails} from './UserDetails';








function App() {
  const history = useHistory();
  return(
    <div className="App">

     
       
            <Button color="inherit" variant="text" onClick={()=>history.push("/pricecard")}>
              PriceCard
            </Button>
            
            <Button  color="inherit" variant="text" onClick={()=>history.push("/userdetails")}>
            UserDetails
            </Button>
            
          

     
      
      
      <br></br>

      

      <Switch>
        

       
       

        <Route  path="/userdetails">
          
          <UserDetails  />
          
          
        </Route>
        <Route  path="/pricecard">
          
        <PriceCard/>
          
          
        </Route>
        
      </Switch>
    </div>
   
  )
  
 
}
export default App;
