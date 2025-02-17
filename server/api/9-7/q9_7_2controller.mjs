import { q972Model } from "./q9_7_2model.mjs" 

const getOne972 = async (req, res) => {
    const id = req.params.id  
    if (!id) {   
          return res.send(JSON.stringify({ status: "error" }))  
    } 
    const result = await q972Model.selectOne972(id)
    if (!result) {   
        return res.send(JSON.stringify({ status: "not found" }))  
    }   
    res.send(JSON.stringify({ status: "success", data: result })) 
} 

export const q9_7_2Controller = { 
    getOne972,
} 