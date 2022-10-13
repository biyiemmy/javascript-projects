let input1 = window.prompt("Enter the first number:");
let result = window.prompt("Pick an operator: + - * /");
let input2 = window.prompt("Enter the second number:");

input1 = parseFloat(input1);
input2 = parseFloat(input2);

if (result == "+") {
  answer = input1 + input2;
  alert(answer);
} else if (result == "-") {
  answer = input1 - input2;
  alert(answer);
} else if (result == "*") {
  answer = input1 * input2;
  alert(answer);
} else if (result == "/") {
  answer = input1 / input2;
  alert(answer);
} else {
  alert("invalid operator");
}

document.write(answer);
