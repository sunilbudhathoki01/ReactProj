class hahha extends React.Component{
    constructor(props){
        this.state={brand:"ford",
            color:"red",
            price:"3000",
            paid:"pending"
        }
        super(props)
    }
colorChange=()=>{
    this.setState({color:"blue"})
}

    render(){
        return(
           <div>
             <h1>MY Car</h1>
            <p> This car is{this.state.brand}and it is {this.state.color}</p>
           </div>,
           <div>
            <button onClick={this.colorChange}>
                
            </button>

           </div>
        )
    }
}