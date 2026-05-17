//  find values whose sum = target value
let arr = [1, 2, 3, 4, 6], target = 6
// output →[1, 3](indices)

let arr1 = [2, 7, 11, 15], target1 = 9
// output →[[1, 3], [3, 5], [2, 4]]
console.log({ first: findSumValue(arr, target) })

// let arr1 = [8, 12, 16, 4], k1 = 4
// output →[[8, 12], [12, 16], [4, 8]]
console.log({ first: findSumValue(arr1, target1) })
// let a = [2, 7, 11, 15], n = 9

function findSumValue(a, n) {
    let result = []
    console.log({ a, n })
    for (let i = 0; i < a.length; i++) {
        let value = a[i]
        for (let k = i + 1; k < a.length; k++) {
            const element = a[k];
            let newV = value + element
            if (newV == n) {
                result.push([value, element])
            }
        }
    }
    return result
}



// function findSumValue(a, n) {
//     let result = []
//     for (let i = 0; i < a.length; i++) {
//         let value = a[i]
//         for (let k = i + 1; k < a.length; k++) {
//             const element = a[k];
//             let newV = Math.abs(value - element)
//             if (newV == n) {
//                 result.push([value, element])
//             }
//         }
//     }
//     return result
// }


