const put813 = (req, res) => {
    console.log(req.body)
    res.send(
        JSON.stringify({
            status: "ok",
            postcode : req.query.postcode,
        }),
    )
}




export const q8_3Controller = {
    put813,
}