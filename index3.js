// write the function that returns the largest number in an array

function findLargestNumber(array) {
  if (array?.length > 0) {
    let number = array[0];
    for (let k = 0; k < array.length; k++) {
      const element = array[k];
      if (element > number) {
        number = element;
      }
    }
    return number;
  }else{
    return null
  }
}
let a = [4, 2, 40, 10, 8, 30];
console.log({first : findLargestNumber(a)})