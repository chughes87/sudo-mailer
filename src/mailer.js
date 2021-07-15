var mailer = require('nodemailer')
var settings = require('../settings')

var getFailedPaymentCopy = (user, collective) =>
`Hello ${user.name || 'Comrade'}!

We just attempted to charge your account for your ${collective} membership payment and encountered a failure!

If you wish to continue supporting Sudo Room, please visit ${collective}.org/humans and update your payment information!

In Solidarity,
Omni Common's Mail Bot
`;

var transport = mailer.createTransport(settings.mailer)

function createSubscription (user, opts, collective) {
  var mailOptions = {
    from: settings.mailFrom,
    to: user.email,
    subject: 'Subscription to sudoroom created',
    text: user.email + ' created a subscription to ' + collective + '.'
  }
  transport.sendMail(mailOptions, function (err, info) {
    if (err) {
      return console.trace(err)
    }
    console.log('message %s sent', info.messageId, info.response)
  })
}

function cancelSubscription (user, collective) {
  var mailOptions = {
    from: settings.mailFrom,
    to: user.email,
    subject: 'Subscription to sudoroom cancelled',
    text: user.email + ' cancelled their subscription to ' + collective + '.'
  }
  transport.sendMail(mailOptions, function (err, info) {
    if (err) {
      return console.trace(err)
    }
    console.log('message %s sent', info.messageId, info.response)
  })
}

function updateSubscription (user, collective) {
  var mailOptions = {
    from: settings.mailFrom,
    to: user.email,
    subject: 'Subscription to sudoroom updated',
    text: user.email + ' updated their subscription to ' + collective + '.'
  }
  transport.sendMail(mailOptions, function (err, info) {
    if (err) {
      return console.trace(err)
    }
    console.log('message %s sent', info.messageId, info.response)
  })
}

function failedPayment (user, collective = 'Omni Commons') {
  var mailOptions = {
    from: settings.mailFrom,
    to: user.email,
    subject: `Subscription to ${collective} failed`,
    text: getFailedPaymentCopy(user, collective)
  }
  
  transport.sendMail(mailOptions, function (err, info) {
    if (err) {
      return console.trace(err)
    }
    console.log('message %s sent', info.messageId, info.response)
  })
}


module.exports = {
  createSubscription,
  updateSubscription,
  cancelSubscription,
  failedPayment
}
