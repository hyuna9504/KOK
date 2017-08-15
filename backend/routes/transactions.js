var express = require('express');
var router = express.Router();
var admin = require("firebase-admin");

router.post('/', function(req, res, next) {
  const id = req.session.userId;
  admin.database().ref('users').orderByChild('id').equalTo(id).once('value')
    .then((user) => {
      if (user.val() === null) {
        throw new Error("No matching user");
      }
      const key = Object.keys(user.val());
      const newRef = admin.database().ref('transactions').push();
      const newKey = newRef.key;
      const transactionObj = {
        id: newKey,
        userId: key[0],
        seller: req.body.seller,
        value: req.body.value,
        regDate: Date.now()
      };
      return newRef.set(transactionObj)
    })
    .then(() => {
      res.status(200).json({ message: "success adding transaction info"});
    })
    .catch((err) => {
      res.status(400).json({ err_msg: err.message });
    });
});

router.get('/', function(req, res, next) {
  const id = req.session.userId;
  const now = Date.now();
  const defaultFrom = now - (7*24*60*60);
  const period = defaultFrom + ":" + now;
  const from = period.split(':')[0];
  const to = period.split(':')[1];
  admin.database().ref('transactions').orderByChild('userId').equalTo(id).once('value')
    .then((transactions) => {
      res.status(200).json(transactions);
    })
    .catch((err) => {
      res.status(400).json({ err_msg: err.message });
    });
});

router.post('/update', function(req, res, next) {
  const tid = req.body.id;
  admin.database().ref('transactions').orderByChild('id').equalTo(tid).once('value')
    .then((transaction) => {
      if (transaction.val() === null) {
        throw new Error("No matching transaction");
      }
      const vals = Object.keys(transaction.val())
        .map((key) => transaction.val()[key]);
      return vals[0];
    })
    .then((val) => {
      const transactionObj = {
        id: tid,
        userId: val.userId,
        seller: val.seller,
        value: val.value,
        regDate: val.regDate,
        image: req.body.image,
        keyword: req.body.keyword
      };
      return admin.database().ref('transactions').child(tid).set(transactionObj)
    })
    .then(() => {
      res.status(200).json({ message: "success updating transaction info"});
    })
    .catch((err) => {
      res.status(400).json({ err_msg: err.message });
    });
});

module.exports = router;
