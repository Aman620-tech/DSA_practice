let a = "I love India"
// Output : "India love I"
console.log(reverseWord(a))

function reverseWord(str) {
    let word = "";
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === " ") {
            result = result + word + " ";
            word = "";
        } else {
            word = str[i] + word;
        }
        // console.log({ word })
    }

    result = result + word;

    return result;
}