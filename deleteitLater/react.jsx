import { createRoot } from "react-dom/client";
const element=(<li>hello</li>,<li>how you doing</li>)
const elemen=<h1 className="myClass">hello world</h1>

function fruit(){
    const x=5;
    let y=apple
    if(x<10){
        y="banana"
    }
    return(
        <h1>{y}</h1>
    )
}

function fruit(){
    const x=5;
    let y="banana"
    return(x,10?"banana":"apple")

}

// rendering a component
function Car(){
    return(
        <h1>hello i am a car</h1>
    )
}
createRoot(document.getElementById('root').render(<car/>))


// components inside component
function Car(){
    return(
        <h1>i am a car</h1>
    )
}

function Garage(){
    return(
        <> <h2>i am a garage</h2>
        <Car/>q
        </>
       
    )
}
createRoot(document.getElementById('root').render(<Garage/>))