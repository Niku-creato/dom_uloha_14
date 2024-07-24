function isDivisible(dividend, divisor) {
    return dividend % divisor === 0;
  }
  
  let number1 = prompt("Введіть перше число:");
  number1 = Number(number1);
  
  let number2 = prompt("Введіть друге число:");
  number2 = Number(number2);
  
  let divisible = isDivisible(number1, number2);
  alert(divisible ? "Перше число ділиться на друге без залишку" : "Перше число не ділиться на друге без залишку");
  