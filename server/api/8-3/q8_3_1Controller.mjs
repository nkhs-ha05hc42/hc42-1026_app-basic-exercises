const objectArray1 = [
    {
        "en" : "apple",
        "ja" : "りんご"
    },
    {
        "en" : "lemon",
        "ja" : "レモン"
    },
    {
        "en" : "grape",
        "ja" : "ぶどう"
    }
]

const get831 = (req, res) => {
    res.send(
        JSON.stringify({
            objectArray1 : objectArray1
        }),
    )
}




export const q8_3_1Controller = {
    get831,
}