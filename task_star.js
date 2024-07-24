function solveQuadratic(a, b, c) {
    let discriminant = b * b - 4 * a * c;
  
    if (discriminant > 0) {
      let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      alert(`Корені рівняння: ${root1} та ${root2}`);
    } else if (discriminant === 0) {
      let root = -b / (2 * a);
      alert(`Рівняння має один корінь: ${root}`);
    } else {
      alert("Рівняння не має дійсних коренів");
    }
  }
  
  let a = prompt("Введіть коефіцієнт a:");
  a = Number(a);
  
  let b = prompt("Введіть коефіцієнт b:");
  b = Number(b);
  
  let c = prompt("Введіть коефіцієнт c:");
  c = Number(c);
  
  solveQuadratic(a, b, c);
  