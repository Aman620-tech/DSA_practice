// max profit
let p = [7, 1, 5, 3, 6, 4];

//  O(n2 )
// function buySellStock(arr) {
//   let profit = 0;
//   let elements = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       const element = arr[j] - arr[i];
//       if (element > profit) {
//         elements = [];
//         profit = element;
//         elements.push(arr[i], arr[j]);
//       }
//     }
//   }
//   console.log({ profit, elements });
//   return profit;
// }

// O(n)
function buySellStock(arr) {
  let profit = 0;
  min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    min = arr[i] < min ? arr[i] : min;
    console.log({ min, ss: arr[i] });
    profit = arr[i] - min > profit ? arr[i] - min : profit;
  }
  return profit;
}

console.log({ buySellStock: buySellStock(p) });
