//  I next value sum previous value;
let a = [0, 1, 2, 3, 4, 5]
// [0, 1, 3, 5, 7, 9] 
// let a = [2, 4, 6, 8]
//  [ 0,1,3,4,7,11,18,29]

console.log({ first: findNextNumber(a) })
function findNextNumber(a) {
    let arr = []
    let lastValue = 0
    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        // console.log(arr, "--------------- ", lastValue, element)
        arr.push(lastValue + element)
        lastValue = element
    }
    console.log({ arr })
}