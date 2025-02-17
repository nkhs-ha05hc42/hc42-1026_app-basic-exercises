import { q974Model } from "./q9_7_4model.mjs" 

const putOne974 = async (req, res) => {
     const id = req.params.id
     const user_id = req.body.user_id   
     const year = req.body.year
     const month = req.body.month
     const day = req.body.day
     const name = req.body.name
     const score = req.body.score  

    const result = await q974Model.updateOne974(id,user_id, year,month,day,name,score)   
    res.send(JSON.stringify({ status: "success", data: result })) 
}

export const q9_7_4Controller = { 
    putOne974,
} 