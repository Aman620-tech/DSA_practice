let a = ["h", "e", "l", "l", "o"]

function reverseString(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let a = array[i]// a = b
        array[i] = array[array.length - 1 - i] // b =c
        array[array.length - 1 - i] = a // c=a
    }
    return array
}
console.log({ reverseString: reverseString(a) })