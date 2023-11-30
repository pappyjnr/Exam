function calculateShippingCost(volumeInCbm) {
  const ratePerCbm = 354;
  const estimatedBilling = volumeInCbm * ratePerCbm;

  return Math.round(estimatedBilling);
}

const volume = 3;
const estimatedBilling = calculateShippingCost(volume);

console.log(`Estimated Billing: ₦${estimatedBilling}`);
