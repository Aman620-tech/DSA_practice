//  reverse string

let a = "Aman"
console.log({ first: reverseString(a) })
function reverseString(value){
    let newValue = value?.split("")
    let a = []
    for (let i = newValue.length; i >= 0; i--) {
        const element = newValue[i];
        a.push(element)
    }
    return a.join("")
}
console.log({ ssss: reverseStringOther(a) })
function reverseStringOther(value){
    let a = ""
    for (let i = value.length- 1; i >= 0; i--) {
        const element = value[i];
        a = a+element
    }
    return a
}