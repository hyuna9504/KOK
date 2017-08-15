var express = require('express');
var router = express.Router();
var admin = require('firebase-admin');
var serviceAccount = require('../firebase_config.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://unithon-8bf36.firebaseio.com/"
});

/* GET home page. */
router.get('/', function(req, res, next) {
  sess = req.session;
	res.render('index', { title: 'Express' });
});

module.exports = router;
