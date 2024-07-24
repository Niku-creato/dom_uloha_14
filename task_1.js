let firstNumber = prompt("Введіть перше число:");
firstNumber = Number(firstNumber);

let secondNumber = prompt("Введіть друге число:");
secondNumber = Number(secondNumber);

let sum = firstNumber + secondNumber;

// Перевіряємо, чи сума кратна 5, і виводимо відповідне повідомлення
if (sum % 5 === 0) {
  alert("Сума кратна 5");
} else {
  alert("Сума не кратна 5");
}


