// let a = [3,0, 1, 2, 3, 3, 3, 4, 5, 2, 1, 3], val = 3   
let a = [3, 2, 2,3, 3], val = 3

function removeElementFromArray(a, val) {
    let x = 0

    for (let i = 0; i < a.length; i++) {
        // shift value to left when it's not equal to val
        if (a[i] != val) {
            a[x] = a[i]
            x = x + 1
        }
    }
    
    return x 
}

console.log({ removeElementFromArray: removeElementFromArray(a, val) })