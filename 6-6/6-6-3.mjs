const map6_6_3 = [
    {
        key: "A",
        value: "カレー",
    },
    {
        key: "B",
        value: "定食",
    }
    ]
    const map3 = new Map(map6_6_3.map(object => [object.key, object.value]))
    for (const [key, value] of map3) {
        console.log(map3.has(key, value))
        console.log(map3.get(key, value))
    }