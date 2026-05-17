//  digit count 

let number = 2555
console.log({ first: digitCount(number) })
function digitCount() {
    n = Math.abs(n)
    if (n == 0) return 1
    let count = 0
    // converting  - ve number to positive
    while (n > 0) {
        n = Math.floor(n / 10) // bind value to to single digit 
        count++
    }
    return count
}



