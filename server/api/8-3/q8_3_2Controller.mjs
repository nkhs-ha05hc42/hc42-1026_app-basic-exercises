const objectArray1 = [
    {
        "en" : "apple",
        "ja" : "りんご"
    },
    {
        "en" : "lemon",
        "ja" : "レモン"
    },
    {
        "en" : "grape",
        "ja" : "ぶどう"
    }
]

//const value = objectArray1.find(({en}) => en == "lemon");

const get832 = (req, res) => {
   
   // if(req.params.en === "lemon"){
        res.send(
            JSON.stringify({
                value,
            }),
        )
    //}else{
        res.send(
            JSON.stringify({
                "status" : "error",
                //"en" : req.params.en,
                "cause" : "not found!"
            }),
        )
    }
//}




export const q8_3_2Controller = {
    get832,
}