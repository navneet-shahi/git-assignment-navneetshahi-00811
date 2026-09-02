const express = require('express');
const router = express.Router();
// TODO: wire up controller once it exists
// const paymentController = require('../controllers/paymentController');

// POST /api/payments - initiate payment
router.put('/', (req, res) => res.status(501).json({ message: 'Not implemented' }));

// GET /api/payments/:id - get payment status
router.get('/:id', (req, res) => res.status(501).json({ message: 'Not implemented' }));

module.exports = router;
