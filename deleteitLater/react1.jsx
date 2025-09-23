import React from "react"
import { createRoot } from "react-dom/client"

class Car extends React.Component{
    render(){
        <h1>Hello I am a Car</h1>
    }
}

class Garage extends React.Component{
    render(){
        <div>
            <h2>
                I am a Garage
            </h2>
            <Car/>
        </div>
    }
}
createRoot(document.getElementById('root').render(<Garage/>))
