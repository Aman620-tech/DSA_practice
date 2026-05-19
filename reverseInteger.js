//  reverse an integer

let no = 214748364;

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
    // let limit = Math.pow(2, 31)
    let limit = 2 ** 31
    return rev > limit || rev < -limit ? 0 : copy > 0 ? rev : -rev
}
