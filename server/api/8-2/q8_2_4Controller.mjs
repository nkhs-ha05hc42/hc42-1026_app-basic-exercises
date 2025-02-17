const default_code = "HC42-9824"
const delete824 = (req, res) => {
    if(req.query.code === default_code){
        res.send(
            JSON.stringify({
                status : "OK",
                code : req.query.code,   
            }),
        )
    }else{
        res.send(
            JSON.stringify({
                status : "error",
                code : req.query.code,
                cause : "not found code!",        
            }),
        )        
    }
}

export const q8_2_4Controller = {
    delete824,
}