// find palindrome . 

let value = 121212

console.log({ qqqq: checkPalindorme(value) })

function checkPalindorme(value) {
    if (value < 0) return false;
    let input = value
    let reverseValue = 0
    while (value > 0) {
        reminder = value % 10
        reverseValue = (reverseValue * 10) + reminder
        value = Math.floor((value / 10))
    }
    return input === reverseValue;
}