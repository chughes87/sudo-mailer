const express = require('express');
const mailer = require('../src/mailer');
const router = express.Router();

router.post('/', (request, response, next) => {
  const event = request.body;
  // Handle the event
  switch (event.type) {
    case 'charge.failed':
      const { email, name } = event.data.object.billing_details;
      console.log('charge failed for ', email, name);
      mailer.failedPayment({ email, name });
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  response.json({received: true});
});

module.exports = router;


// Match the raw body to content type application/json
