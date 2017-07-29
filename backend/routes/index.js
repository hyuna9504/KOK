var express = require('express');
var router = express.Router();
var admin = require('firebase-admin');
var serviceAccount = require('../firebase_config.json');
var path = require('path');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://unithon-8bf36.firebaseio.com/"
});

/* GET home page. */
router.get('/', function(req, res, next) {
  sess = req.session;
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
});

module.exports = router;
