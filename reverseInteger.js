//  reverse an integer

let no = -123456;

console.log({ reverseInteger: reverseInteger(no) })

function reverseInteger(n) {
    let copy = n
    n = Math.abs(n)
    let rev = 0;
    while (n > 0) {
        rem = Math.floor(n % 10)
        rev = Math.floor(rev * 10) + rem
        n = Math.floor(n / 10)
    }
    return copy > 0 ? rev : -rev
}
