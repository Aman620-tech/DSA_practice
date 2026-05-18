//  find minimum number of an array


let a = [4, 2, 40, 10, 8, 30];

function findLeastNumber(array){
    let number = array[0]
    for(let i = 0 ; i < array.length ; i++){
        // console.log({ss : number , dddd : array[i], sssDS: number > array[i]})
        if(number  > array[i]){
            number = array[i]
        }
    }
    return number
}

console.log({first: findLeastNumber(a)})