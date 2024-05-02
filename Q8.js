function isPositive(number) {
    return number > 0;
  }
  let input1 = 10;
  let result1 = isPositive(input1);
  console.log("Input:", input1);
  console.log("Expected Output:", result1); 
  //Output: true
  let input2 = -3;
  let result2 = isPositive(input2);
  console.log("Input:", input2);
  console.log("Expected Output:", result2); //Output: false
  