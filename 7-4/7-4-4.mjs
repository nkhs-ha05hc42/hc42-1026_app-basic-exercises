const ahou = (a,b) => {
    console.log("ahou", a+b, new Date())
}

const callbackFunk = (a,b, callbackFunk) => {
    setTimeout(() => { 
        callbackFunk(a,b)    
      setTimeout(() => { 
        console.log("end",  new Date())
                } ,5000)
        } ,2000)
    }
    
console.log("start", new Date()) 
callbackFunk(5,4,ahou)
