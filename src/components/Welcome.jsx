import {useState} from "react";
import './Welcome.css';
const Welcome =() => {
    const[userName, setUserName] = useState("");
    // const handleChange = (e) => {
    //     setUserName(e.target.value);
   
    
    return ( 
        <div>
            <h1 className="textWelcome">Welcome : {userName} to the CHOCOBODEX</h1>
            <input className="enterName"
            type="text"
            name="userName"
            placeholder="Nom"
            onChange= {(e) => setUserName(e.target.value)}/>
        </div>
    );

}

export default Welcome