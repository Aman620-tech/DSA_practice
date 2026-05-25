//  it's an sorted array, (non decreasing)
let a = [0, 0, 1, 1, 1, 2, 2, 3, 4, 4, 4,]
console.log({ first: arrangUniqueAtFirst(a) })

function arrangUniqueAtFirst(arr) {
    let a = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > arr[a]){
            a= a+ 1
            arr[a] = arr[i]
        }
    }
    return [arr]
}

// function removeDuplicate(arr) {
//     let a = [], b= []
//     for (let i = 0; i < arr.length; i++){
//         let value = arr[i]
//         if(!a.includes(value)){
//             a.push(value)
//         }else{
//             b.push(value)
//         }
//     }
//     return [...a,...b]
// }

// count repeated element
// function removeDuplicate(arr) {
//     let a = []
//     for (let i = 0; i < arr.length; i++){
//         let value = arr[i]
//         if(!a.includes(value)){
//             a.push(value)
//         }
//     }
//     return a.length   
// }



