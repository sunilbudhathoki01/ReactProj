function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("here is your data")
        })
    })
}
fetchData()
.then((data)=>console.log(data))
.then((error)=> console.log(error))