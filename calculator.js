console.log('Hello World')

const firstValue = parseInt(prompt('what is the first value ?'));
const operator = prompt('what is the operator ?')
const secondValue = parseInt(prompt('what is the second value ?'));

/*if (operator === "+"){
    console.log(firstValue + secondValue)
}
else {
    console.log(firstValue - secondValue)
}*/

switch(operator){
      case "+":
        cconsole.log(firstValue + secondValue);
        break;
    case "-":
        console.log(firstValue - secondValue);
        break;
    case "*":
        cconsole.log(firstValue * secondValue);
        break;
    case "/":
        cconsole.log(firstValue / secondValue);
        break;
    default:
        console.log("invalid operator");
        break;
}