let sum = 0
let count = 0

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0){
        sum += i
    }

    if (sum  >= 50) {
        console.log("-")
        break
    }
    count = count + 1
    console.log(i)
    }

    console.log(sum)
    console.log(count)