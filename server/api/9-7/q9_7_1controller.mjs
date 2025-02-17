import { q971Model } from "./q9_7_1model.mjs" 

const getAll971 = async (req, res) => { 
        const result = await q971Model.selectAll971() 
        res.send(JSON.stringify({ status: "success", list: result }))
} 


export const q9_7_1Controller = { 
      getAll971,
} 

