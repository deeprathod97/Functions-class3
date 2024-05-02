function reverseString(inputString) {
    return inputString.split("").reverse().join("");
  }
let input = "hello";
let reversed = reverseString(input);
console.log("Input:", input, ", Expected Output:", reversed); 
// Output: "olleh"
  