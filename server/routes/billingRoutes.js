const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = app => {
  app.post("/api/stripe", (req, res) => {
    stripe.charge.create({
      amount: 5 * 100,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id
    });
  });
};
