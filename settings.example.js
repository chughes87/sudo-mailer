
module.exports = {

	base_url: "https://example.com",
	mailFrom: 'sudoroompayments@gmail.com',
	mailer: {
		service: 'Gmail',
		auth: {
				user: 'gmail.user@gmail.com',
				pass: 'yourpass'
		}
	},

	collectives: {
			sudoroom: {
					name: "sudo room",
					privs: ['member', 'admin'], // privileges supported by this collective

					// membership levels
					memberships: {
							base: 10 // base membership is $10 per month
					},

					stripe_api_key: undefined, // Add your Stripe API key
					stripe_publishable_key: undefined // Add your Stripe publishable key
			},
			ccl: {
					name: "Counter Culture Labs",
					privs: ['member', 'admin'], // privileges supported by this collective

					// membership levels
					memberships: {
							food_safe_only: 20, // Food safe only membership at $20 per month
							bsl_1: 80 // BSL-1 membership at $80 per month
					},

					stripe_api_key: undefined, // Add your Stripe API key
					stripe_publishable_key: undefined // Add your Stripe publishable key
			}
	},

	mailer: {
			type: "smtp", // can also be "direct" or "console"
			host: "localhost", // only needed for type: "smtp"
			port: 25, // only needed for type: "smtp"
			tls: false,
			from_address: "noreply@example.com"
	}
};
