var express = require('express');
var router = express.Router();
var admin = require("firebase-admin");

router.post('/', function(req, res, next) {
  const id = "-KqCstYTIIxeecYJa8-n"; // Todo: Should be "req.session.userId" after naver login complete
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

module.exports = router;
