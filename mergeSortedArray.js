// merge sorted Array
let num1 = [1, 2, 3, 0, 0, 0],
  n = 3;
let num2 = [2, 5, 6],
  m = 3;

mergeArray(num1, n, num2, m);

// it's from first to last and now last to first
// function mergeArray(a1, n, a2, m) {
//   let a1Copy = a1.slice(0, n);
//   let p1 = 0;
//   let p2 = 0;

//   for (let i = 0; i < m + n; i++) {
//     // const element = a1[i];
//     if (p2 >= n || (p1 < m && a1Copy[p1] < a2[p2])) {
//       // check lowest
//       a1[i] = a1Copy[p1];
//       p1++;
//     } else {
//       a1[i] = a2[p2];
//       p2++;
//     }
//   }
//   console.log({ a1 });
//   return a1;
// }


//  used reverse array
function mergeArray(a1, n, a2, m) {
  let a1Copy = a1.slice(0, n);
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i > 0; i--) {
    // const element = a1[i];
    if(p2 < 0 ){
      break;
    }
    // console.log({p2, p1,i :  a1[i], a1: a1[p1], a2: a2[p2]})
    if (p1 >=0 && a1[p1] > a2[p2]) {
      a1[i] = a1[p1];
      p1--;
    } else {
      a1[i] = a2[p2];
      p2--;
    }
  }
  console.log({ a1 });
  return a1;
}
