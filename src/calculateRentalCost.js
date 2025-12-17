/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalCost = days * 40;

  if (days >= 7) {
    totalCost -= 50; // Desconto de $50 para 7 ou mais dias
  } else if (days >= 3) {
    totalCost -= 20; // Desconto de $20 para 3 ou mais dias
  }

  return totalCost;
}

module.exports = calculateRentalCost;
