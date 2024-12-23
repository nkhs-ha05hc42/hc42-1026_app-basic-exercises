const values = ["A", "B", "A", "C", "D"]
 const valueSet = new Set()
 for (const value of values) {
 valueSet.add(value)
 }
 console.log(Array.from(valueSet.values()))