const Payment = require('../models/payment');
const { PAYMENT_LIMITS } = require('../config/constants');

/**
 * Validate that a payment amount is within acceptable bounds.
 */
const validateAmount = (amount) => {
  if (!amount || typeof amount !== 'number') {
    const err = new Error('Payment amount must be a valid number.');
    err.statusCode = 400;
    throw err;
  }
  if (amount <= 0) {
    const err = new Error('Payment amount must be greater than zero.');
    err.statusCode = 400;
    throw err;
  }
  if (amount > PAYMENT_LIMITS.MAX_TRANSACTION_AMOUNT) {
    const err = new Error(`Payment amount cannot exceed $${PAYMENT_LIMITS.MAX_TRANSACTION_AMOUNT}.`);
    err.statusCode = 400;
    throw err;
  }
};

/**
 * Process a payment for an order.
 */
const processPayment = async (paymentData) => {
  const { orderId, userId, amount, cardNumber, expiryMonth, expiryYear, cvv } = paymentData;

  validateAmount(amount);

  // TODO: validate card number format
  // TODO: call payment gateway

  const cardLastFour = String(cardNumber).slice(-4);

  const payment = new Payment({
    order: orderId,
    user: userId,
    amount,
    cardLastFour,
    status: 'pending',
  });

  await payment.save();
  return payment;
};

module.exports = { processPayment, validateAmount };
