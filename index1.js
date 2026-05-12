// search element in array and return index if not return -1

let a = [4, 2, 0, 10, 8, 30];
let n = 9;

console.log({ aa: searchIndex(a, n) });
 
function searchIndex(arr, value) {
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element == value) {
        return -1;
      }
      // console.log(i , " --- ", arr.length -1, " --- ",  element, " --- ". i == arr.length -1,  value != arr[i])
      //  Below commented code is not required.
      // if(i == arr.length -1 && value != arr[i]){
      //     return -1
      // }
    }
    return -1;
  } else {
    return 0;
  }
}
