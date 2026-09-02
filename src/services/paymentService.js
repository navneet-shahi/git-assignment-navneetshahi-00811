const { ORDER_LIMITS } = require('../config/constants');

// TODO: integrate with real payment gateway (Stripe)
// TODO: add card tokenization

/**
 * Process a payment for an order.
 * @param {Object} paymentData - { orderId, amount, cardNumber, expiryMonth, expiryYear, cvv }
 */
const processPayment = async (paymentData) => {
  // TODO: implement
  throw new Error('Not implemented yet');
};

module.exports = { processPayment };
