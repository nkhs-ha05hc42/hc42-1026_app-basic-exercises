const map6_6_4 = [
    {
        key: "A",
        value: "カレー",
    },
    {
        key: "B",
        value: "定食",
    }
    ]
    const map4 = new Map(map6_6_4.map(object => [object.key, object.value]))
    map4.delete("A")

    for (const [key, value] of map4) {
        console.log(map4.has("A"))
        console.log(map4.get("A"))
        console.log(map4.has("B"))
        console.log(map4.get("B"))
    }