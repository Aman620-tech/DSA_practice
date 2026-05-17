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



// function digitCount(number) {
//     let count = 0
//     let n = number
//     let run = true
//     while (run) {
//         if (n == 0) {
//             run = false
//             break
//         }
//         n = Math.floor(n / 10)
//         count++
//     }
//     return count
// }