function squareArea() {
  let side = prompt("Введіть сторону квадрата:");
  side = Number(side);
  let area = side * side;
  alert(`Площа квадрата: ${area}`);
}

// Викликаємо функцію
squareArea();