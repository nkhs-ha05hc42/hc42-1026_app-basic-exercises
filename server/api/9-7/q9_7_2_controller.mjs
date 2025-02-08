import { Model } from "./model.mjs" 
 
const post9_7 = async (req, res) => { 
  const name = req.body.name 
  const age = req.body.age 
  if (!name || !age) { 
    return res.send(JSON.stringify({ status: "error" })) 
  } 
  const result = await Model.insertOne(name, age) 
  res.send(JSON.stringify({ status: "success", data: result })) 
} 


const get19_7 = async (req, res) => { 
    const id = req.params.id 
    if (!id) { 
      return res.send(JSON.stringify({ status: "error" })) 
    } 
    const result = await Model.selectOne(id) 
    if (!result) { 
      return res.send(JSON.stringify({ status: "not found" })) 
    } 
    res.send(JSON.stringify({ status: "success", data: result })) 
  } 
   
  const getA9_7 = async (req, res) => { 
    const result = await Model.selectA() 
    res.send(JSON.stringify({ status: "success", list: result })) 
  } 

  const put9_7 = async (req, res) => { 
    const id = req.params.id 
    const postcode = req.body.postcode 
    const address = req.body.address 
    if (!postcode || !address) { 
      return res.send(JSON.stringify({ status: "error" })) 
    } 
    const result = await Model.updateOne(id, postcode, address) 
    if (!result) { 
      return res.send(JSON.stringify({ status: "not found" })) 
    } 
    res.send(JSON.stringify({ status: "success", data: result })) 
  } 

  const delete9_7 = async (req, res) => { 
    const id = req.params.id 
    if (!id) { 
      return res.send(JSON.stringify({ status: "error" })) 
    } 
    const result = await sample2Model.deleteOne(id) 
    if (!result) { 
      return res.send(JSON.stringify({ status: "not found" })) 
    } 
    res.send(JSON.stringify({ status: "success", data: result })) 
  } 
 
export const q9_7_2_Controller = { 
  post9_7, 
  get19_7,
  getA9_7,
  put9_7,
  delete9_7, 
} 
