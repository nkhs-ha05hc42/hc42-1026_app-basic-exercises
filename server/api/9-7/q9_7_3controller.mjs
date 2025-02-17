import { q973Model } from "./q9_7_3model.mjs" 

const postOne973 = async (req, res) => { 
     const user_id = req.body.user_id   
     const year = req.body.year
     const month = req.body.month
     const day = req.body.day
     const name = req.body.name
     const score = req.body.score  

    const result = await q973Model.insertOne973(user_id,year,month,day,name,score)   
    res.send(JSON.stringify({ status: "success", data: result })) 
}

export const q9_7_3Controller = { 
    postOne973,
} 