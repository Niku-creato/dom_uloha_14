function calculateDiscountedPrice(total) {
    let discount = total > 800 ? 0.05 : (total > 500 ? 0.03 : 0);
    return total - total * discount;
  }
  
  let purchaseAmount = prompt("Введіть суму покупки:");
  purchaseAmount = Number(purchaseAmount);
  let finalAmount = calculateDiscountedPrice(purchaseAmount);
  alert(`Остаточна сума покупки: ${finalAmount.toFixed(2)} грн.`);
  