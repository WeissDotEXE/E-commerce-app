const express = require("express");
const router = express.Router();
const Transactions = require("../model/Transactions");

//route for getting transactions
router.get("/", async (req, res) => {
  try {
    const transactions = await Transactions.find();
    res.json(transactions);
    res.send(transactions);
  } catch (error) {
    res.json({ message: "somethign went wrong with GET" });
  }
});

//route for creating a transaction
router.post("/", async (req, res) => {
  const transaction = new Transactions({
    name: req.body.name,
    adress: req.body.adress,
    payment: req.body.payment,
  });

  try {
    const savedTransaction = await transaction.save();
    res.json(savedTransaction);
  } catch (error) {
    res.json({ message: "something went wrong with POST transaction" });
  }
});

//route for updating transaction
//used for changing status of transaction
//later do something with that(send email?)

router.patch("/:transactionId", async (req, res) => {
  try {
    const updatedTransaction = await Transactions.updateOne(
      { _id: req.params.transactionId },
      {
        $set: {
          name: req.body.name,
          adress: req.body.adress,
          payment: req.body.payment,
          status: req.body.status,
        },
      }
    );
    res.json(updatedTransaction);
  } catch (error) {
    res.json({ message: "something went wrong with PATCH transaction" });
  }
});

router.delete("/:transactionId", async (req, res) => {
  try {
    const removedTransaction = await Transactions.remove({
      _id: req.params.transactionId,
    });
    res.json(removedTransaction);
  } catch (error) {
    res.json({ message: "something went wrong with DELETE transaction" });
  }
});

module.exports = router;
