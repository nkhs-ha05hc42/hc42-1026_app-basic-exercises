const map6_6_2 = [
    {
    key: "A",
    value: "カレー",
    },
    {
    key: "B",
    value: "定食",
    }
    ]
    const map2 = new Map(map6_6_2.map(object => [object.key, object.value]))
    map2.delete("A")
   for (const [key, value] of map2) {
    console.log(key, value)
    }