import { q975Model } from "./q9_7_5model.mjs"

const deleteOne = async (req, res) => {  
    const id = req.params.id

    const result = await q975Model.deleteOne975(id) 

    res.send(JSON.stringify({ status: "success", data: result })) 
} 
 
export const q9_7_5Controller = { 
    deleteOne,
} 