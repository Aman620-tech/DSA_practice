// star patterns , squre, right angle pattern, OPPOSITE right angle pattern
let n = 5
let value = 1

// 1
// 01
// 010
// 1010
// 10101
for (let i = 0; i < n; i++) {
    let row = "" 
    for (let j = 0; j < i + 1; j++) {
        row += value 
        if (value == 1) {
            value = 0
        } else {
            value = 1
        }
    }
    console.log(row)
}





// 1
// 10
// 101
// 1010
// 10101
// 101010
// for (let i = 0; i < n; i++) {
//     let row = "", value = 1
//     for (let j = 0; j < i + 1; j++) {
//         row += value
//         if (value == 1) {
//             value = 0
//         } else {
//             value = 1
//         }
//     }
//     console.log(row)
// }





//          *
//        * *
//      * * *
//    * * * *
//  * * * * *
// for (let i = 0; i < n; i++) {
//     let row = ""
//     // below adding empty spaces
//     for (let j = 0; j < n - (i + 1); j++) {
//         row += "  "
//     }
//     // below added *
//     for (let k = 0; k < i + 1; k++) {
//         row += " *"
//     }
//     console.log(row)
// }


//  star pattern with reverse number
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// reverseNumberPattern1(5)
// function reverseNumberPattern1(n) {

//     for (let i = 0; i < n; i++) {
//         let row = ""
//         for (let j = 0; j < n - i; j++) { // 5 -0 , 5-1. 5-2.5-3....
//             row += ` ${(j + 1)}`
//         }
//         console.log(row)
//     }

// }
// console.log("=================")
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// reverseNumberPattern(5)
// function reverseNumberPattern(n) {

//     for (let i = n; i > 0; i--) {
//         let row = ""
//         for (let j = 0; j < i; j++) {
//             row += ` ${(j + 1)}`
//         }
//         console.log(row)
//     }

// }


// 1
// 2 2
// 3 3 3
// starPatternTraingleWithNumber(3)
// //  right angle pattern
// function starPatternTraingleWithNumber(n) {

//     for (let i = 0; i < n; i++){
//         let row = ""
//         for(let j =0 ; j < i +1 ; j ++){
//             row += ` ${i + 1}`
//         }
//         console.log(row)
//     }

// }

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// starPatternTraingleWithNumber(5)
// //  right angle pattern
// function starPatternTraingleWithNumber(n) {
//     for (let i = 0; i < n; i++) {
//         let row = ""
//         for (let j = 0; j < i + 1; j++) {
//             row += ` ${j + 1}`
//         }
//         console.log(row)

//     }
// }


// * * * * *
// * * * *
// * * *
// * *
// *
// oppositeStarPatternTraingle(4)
// // OPPOSITE right angle pattern
// function oppositeStarPatternTraingle(n) {
//     for (let i = 0; i < n; i++) {
//         let row = ""
//         for (let j = 0; j < n - i; j++) {
//             row += " *"
//         }
//         console.log(row)

//     }
// }
// * * * * *
// * * * *
// * * *
// * *
// *
// starPatternTraingle(4)
// //  right angle pattern
// function starPatternTraingle(n) {
//     for (let i = 0; i < n; i++) {
//         let row = ""
//         for (let j = 0; j < i+1; j++) {
// row += " *"
//         }
//         console.log(row)

//     }
// }


// * * * *
// * * * *
// * * * *
// * * * *
// starPatternSquare(4)
// //  square pattern
// function starPatternSquare(n) {
//     for (let i = 0; i < n; i++) {
//         let row = ""
//         for (let j = 0; j < n; j++) {
//             row += " *"
//         }
//         console.log(row)

//     }
// }



