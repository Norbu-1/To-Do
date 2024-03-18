import React, { useContext } from "react";
import  { todoContext } from "./store/apicontext";


function WelcomeFun() {
    const { todoItems } = useContext(todoContext);
    
    return (
        <p className="welcome">Enjoy Your Day! </p>
        
    );
}

export default WelcomeFun;
