// find the second largest number in an array.

// let a = [4, 2, 40, 10, 8, 30];
// let a = [1, 2, 3, 4, 9, 77, 8, 756, 56, 4, 4, 32, 7, 0];
let a = [10,  8, 5 ];

console.log({ secondLargest: findSecondLargest(a,) })
function findSecondLargest(arr, val) {
    let largestValue = arr[0]
    let secondLargest = -Infinity
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i]
        if (value > largestValue) { // if largestValue is smaller 
            secondLargest = largestValue
            largestValue = value
        } else if (value > secondLargest && value < largestValue) {
            console.log({ value })
            secondLargest = value
        }
    }
    // below code is of no use , in this logic was to use 2 loops but that's not good
    // for(let i = 0 ; i < arr.length;i++){
    //     let value = arr[i]
    //     if (value < largestValue){
    //         // console.log({largestValue, value})
    //         secondLargest = value
    //         // console.log({ secondLargest })
    //     }
    // }
    return secondLargest

}