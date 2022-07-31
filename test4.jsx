import React from "react";
import Button from '@mui/material/Button';
import { Input } from '@mui/material';
import axios from "axios";

//import './App.css';

function App() {

  const [input,setInput] = React.useState("")
  const [res,setRes] = React.useState("Write something, push the button and be prepare because you aint ready for what is coming")

  const handleChange = (frase) => {
    setInput(frase.target.value)
  }
  
  const handleCall = () => {
    call(input).then(response => {
      if(response){
        setRes("YES!!!!!!!!!!!!!!!!! you found a palindrome")
      }else{
        setRes("NO!!!!!!!!!!!!!!!!!! try again")
      }
    })
    
  }

  return (
    <>
        <div className="app-functional " style={{textAlign:"center"}}>
          <Input
          onChange={frase => handleChange(frase)}
          />
          <Button 
            variant="text"
            onClick={handleCall}
          >
            Validate</Button>

        </div>
        <div className="app-functional" style={{textAlign:"center"}}>
          <h2 style={{color:"#1976d2"}}>{res}</h2>
        </div>
    </>
  );
}

const call = async (frase) => {
  const baseURL = "http://localhost:3000";
  const a = await axios.get(baseURL + "/palindrome/" + frase);
  return a.data.esPalindrome;
}

export default App;
