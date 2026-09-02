const { ORDER_LIMITS } = require('../config/constants');

const processPayment = async (paymentData) => {
  console.log('[DEBUG] processPayment() CALLED - full paymentData:', JSON.stringify(paymentData));
  console.log('[DEBUG] cardNumber (FULL!):', paymentData.cardNumber);   // SECURITY RISK - logs card number!
  console.log('[DEBUG] cvv:', paymentData.cvv);                         // SECURITY RISK - logs CVV!
  console.log('[DEBUG] amount:', paymentData.amount);
  console.log('[DEBUG] ORDER_LIMITS from config:', JSON.stringify(ORDER_LIMITS));
  throw new Error('Not implemented yet');
};

module.exports = { processPayment };
