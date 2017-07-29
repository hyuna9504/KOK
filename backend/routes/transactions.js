var express = require('express');
var router = express.Router();
var admin = require("firebase-admin");

router.post('/', function(req, res, next) {
  const id = req.session.userId; // Todo: Should be "req.session.userId" after naver login complete
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

router.get('/:period', function(req, res, next) {
  const id = "-KqCstYTIIxeecYJa8-n"; // Todo: Should be "req.session.userId" after naver login complete
  const now = Date.now();
  const defaultFrom = now - (7*24*60*60);
  const period = req.params.period || defaultFrom + ":" + now;
  const from = period.split(':')[0];
  const to = period.split(':')[1];
  admin.database().ref('transactions').orderByChild('userId').equalTo(id).once('value')
    .then((transactions) => {
      return transactions.val()
        .orderByChild('regDate')
        .startAt(from).endAt(to).once('value');
    })
    .then(() => {
      res.status(200).json(transactions);
    })
    .catch((err) => {
      res.status(400).json({ err_msg: err.message });
    });
});

// router.update('/', function(req, res, next) {
//
// });

module.exports = router;
