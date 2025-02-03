
const getSample1 = (req, res) => { 
    res.send( 
    JSON.stringify({ 
        code: req.query.code, 
        name : "船橋勇太"
    }), 
    ) 
} 
export const q8_1Controller = { 
    getSample1, 
}
