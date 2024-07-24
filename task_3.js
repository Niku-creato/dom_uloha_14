function chooseDrink() {
    let choice = prompt("1 - Чай\n2 - Кава\n3 - Сік\n4 - Вода");
  
    switch (choice) {
      case '1':
        alert("Ви обрали чай");
        break;
      case '2':
        alert("Ви обрали каву");
        break;
      case '3':
        alert("Ви обрали сік");
        break;
      case '4':
        alert("Ви обрали воду");
        break;
      default:
        alert("Такого напою у нас нема");
    }
  }
  // Викликаємо функцію
chooseDrink();