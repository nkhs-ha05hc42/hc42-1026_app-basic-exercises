const default_code = "HC42-9821";
const name = "情報太郎";
const get821 = (req, res) => {

    if(default_code === req.query.code){
        res.send(
            JSON.stringify({
                code : req.query.code,
                name : "情報太郎",
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




export const q8_2_1Controller = {
    get821,
}