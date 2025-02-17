const default_postcode = "012-0003"
const default_address =  "北海道芽室町"

const put823 = (req, res) => {
    if(req.body.code === "HC42-9823"){
        if(default_postcode === req.body.postcode && default_address === req.body.address){
            console.log("code : " + req.body.code)
        }else if(default_postcode === req.body.postcode && default_address != req.body.address){
            console.log("code : " + req.body.code, "\n" + "address : " +  req.body.address)
        }else if(default_postcode != req.body.postcode && default_address === req.body.address){
            console.log("code :" + req.body.code,"\n" + "postcode : " + req.body.postcode)
        }else{
            console.log(req.body)
        }

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
                code : req.body.code,
                cause : "not found code!",             
            }),
        )        
    }
}

export const q8_2_3Controller = {
    put823,
}