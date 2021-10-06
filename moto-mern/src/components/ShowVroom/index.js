import React, {useEffect} from "react"; 
import axios from "axios";
function ShowVroom() {
useEffect(() =>{
    axios.get("/getcars").then(results => console.log(results))
    console.log("hi there");
},[])
    return(
        <section>
            <div>
                <header className="comp-header">
                    <h1>ShowVroom</h1>
                </header>
            </div>
        </section>
    ) 
}

export default ShowVroom;