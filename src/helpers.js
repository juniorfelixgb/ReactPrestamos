export function getTotal(quantity, rangePay) {
  let totalQuantity;
  if (quantity <= 1000) {
    totalQuantity = quantity * 0.25;
  } else if (quantity > 1000 && quantity <= 5000) {
    totalQuantity = quantity * 0.2;
  } else if (quantity > 5000 && quantity <= 10000) {
    totalQuantity = quantity * 0.15;
  } else {
    totalQuantity = quantity * 0.1;
  }

  let totalRange = 0;
  switch (rangePay) {
    case 3:
      totalRange = quantity * 0.05;
      break;
    case 6:
      totalRange = quantity * 0.10;
      break;
    case 12:
      totalRange = quantity * 0.15;
      break;
    case 24:
      totalRange = quantity * 0.20;
      break;
    default:
      break;
  }
  return totalRange + totalQuantity + quantity;
}
