const delete814 = (req, res) => {
    res.send(
        JSON.stringify({
            "status": "OK",
            code: req.query.code,
        }),
    )
}




export const q8_4Controller = {
    delete814,
}