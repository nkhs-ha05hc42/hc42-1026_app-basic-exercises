import express from "express"
import path from "path"
import { 
    sample1Controller,
    q8_1Controller,
    sample2Controller,
    q9_7_Controller
 } from "./api/controllers.mjs"



const routers = express.Router()

routers.post("/api/sample1", sample1Controller.postSample1) 
routers.get("/api/sample1", sample1Controller.getSample1)
routers.put("/api/sample1", sample1Controller.putSample1) 
routers.delete("/api/sample1", sample1Controller.deleteSample1)
routers.get("/api/sample1/:id", sample1Controller.getPathParamSample1) 

routers.get("/api/q8-1", q8_1Controller.getSample1)

// client配下は、ブラウザサイドで実行されるファイル（HTML/JS/CSS/画像など）を配置する
routers.use(express.static(`${path.resolve()}/client`))

routers.post("/api/sample2", sample2Controller.postSample2) 
routers.get("/api/sample2/:id", sample2Controller.getOneSample2) 
routers.get("/api/sample2", sample2Controller.getAllSample2) 
routers.put("/api/sample2/:id", sample2Controller.putSample2) 
routers.delete("/api/sample2/:id", sample2Controller.deleteSample2) 

//routers.post("/api/9-7", )
routers.get("/api/9-7", q9_7_Controller.getA9_7) 


export default routers
