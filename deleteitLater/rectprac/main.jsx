import { createRoot } from "react-dom/client";

function Football(){
    const shoot=()=>{
alert("Great shoot")
    }
return(
    <button onClick={shoot}>Take a shoot</button>
)
}
 const root=createRoot(document.getElementById('root'))
 root.render(<Football/>)