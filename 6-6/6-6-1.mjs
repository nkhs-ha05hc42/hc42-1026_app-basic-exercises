const map6_6_1 = [
    {
    key: "A",
    value: "カレー",
    },
    {
    key: "B",
    value: "定食",
    }
    ]
    const map1 = new Map(map6_6_1.map(object => [object.key, object.value]))
   for (const [key, value] of map1) {
    console.log(key, value)
    }