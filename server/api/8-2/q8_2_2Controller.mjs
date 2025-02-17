const post822 = (req, res) => {
    if(req.body.code === "HC42-9821"){
        res.send(
            JSON.stringify({
                status : "error",
                code : req.body.code,
                cause : "code already exists!",  
            }),
        )
    }else{
        console.log(req.body)
        res.send(
            JSON.stringify({
                status : "OK",
                postcode : req.query.postcode,           
            }),
        )        
    }
}

export const q8_2_2Controller = {
    post822,
}