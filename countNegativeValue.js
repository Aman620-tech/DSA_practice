// write a function that return the number of array negative number in an array

// let array = [1, 2, 3, 0, -3, -2, -1];
let array = [1, 2, 3, 0];

console.log({first: countNegativeValue(array)})

function countNegativeValue(arr) {
  if (arr && arr.length > 0) {
    let count = 0
    for (let k = 0; k < arr.length; k++) {
        let value = arr[k]
        if(value < 0){
            count = count + 1;
        }
    }
    return count
  }
}
