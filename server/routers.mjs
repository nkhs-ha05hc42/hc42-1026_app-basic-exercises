import express from "express"
import path from "path"

import { sample1Controller } from "./api/controllers.mjs"
import { q8_1Controller } from "./api/controllers.mjs"
import { q8_2Controller } from "./api/controllers.mjs"
import { q8_3Controller } from "./api/controllers.mjs"
import { q8_4Controller } from "./api/controllers.mjs"
import { q8_2_1Controller } from "./api/controllers.mjs"
import { q8_2_2Controller } from "./api/controllers.mjs"
import { q8_2_3Controller } from "./api/controllers.mjs"
import { q8_2_4Controller } from "./api/controllers.mjs"
import { q8_3_1Controller } from "./api/controllers.mjs"
import { q8_3_2Controller } from "./api/controllers.mjs"
import { sample2Controller } from "./api/controllers.mjs"
import { q9_7_1Controller } from "./api/controllers.mjs"
import { q9_7_2Controller } from "./api/controllers.mjs"
import { q9_7_3Controller } from "./api/controllers.mjs"
import { q9_7_4Controller } from "./api/controllers.mjs"
import { q9_7_5Controller } from "./api/controllers.mjs"





const routers = express.Router()

routers.post("/api/sample1",sample1Controller.postSample1)

routers.get("/api/sample1",sample1Controller.getSample1)

routers.put("/api/sample1",sample1Controller.putSample1)

routers.delete("/api/sample1",sample1Controller.deleteSample1)

routers.get("/api/sample1/:id",sample1Controller.getPathParamSample1)

routers.get("/api/8-1/",q8_1Controller.get811)

routers.post("/api/8-1/",q8_2Controller.post812)

routers.put("/api/8-1/",q8_3Controller.put813)

routers.delete("/api/8-1/",q8_4Controller.delete814)

routers.get("/api/8-2/",q8_2_1Controller.get821)

routers.post("/api/8-2",q8_2_2Controller.post822)

routers.put("/api/8-2",q8_2_3Controller.put823)

routers.delete("/api/8-2",q8_2_4Controller.delete824)

routers.get("/api/8-3",q8_3_1Controller.get831)

routers.get("/api/8-3",q8_3_2Controller.get832)

routers.post("/api/sample2",sample2Controller.postSample2) 

routers.get("/api/sample2/:id",sample2Controller.getAllSample2)

routers.get("/api/sample2",sample2Controller.getAllSample2)

routers.put("/api/sample2/:id",sample2Controller.putSample2)

routers.delete("/api/sample2/:id",sample2Controller.deleteSample2)

routers.get("/api/9-7",q9_7_1Controller.getAll971)

routers.get("/api/9-7/:id",q9_7_2Controller.getOne972)

routers.post("/api/9-7",q9_7_3Controller.postOne973)

routers.put("/api/9-7/:id",q9_7_4Controller.putOne974)

routers.delete("/api/9-7/:id",q9_7_5Controller.deleteOne)

// client配下は、ブラウザサイドで実行されるファイル（HTML/JS/CSS/画像など）を配置する
routers.use(express.static(`${path.resolve()}/client`))

export default routers
