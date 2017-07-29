var express = require('express');
var router = express.Router();
var admin = require("firebase-admin");
var serviceAccount = require('../firebase_config.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://unithon-8bf36.firebaseio.com/"
});

var client_id = 'SywgbqwVSP4an161TdKS';
var client_secret = 'DhTfuacMl_';
var state = "RANDOM_STATE";
var redirectURI = encodeURI("http://localhost:3000/users/auth");
var api_url = "";

router.get('/naverlogin', function (req, res) {
  api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirectURI + '&state=' + state;
  res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
  res.end("<a href='"+ api_url + "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>");
});

router.get('/auth', function(req, res, next) {
    code = req.query.code;
    state = req.query.state;
    api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
        + client_id + '&client_secret=' + client_secret + '&redirect_uri=' + redirectURI + '&code=' + code + '&state=' + state;
    var request = require('request');
    var options = {
        url: api_url,
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log("yeah");
            res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
            res.end(body);
            // admin.database().ref('user').set({
            //     username: "hi"
            // }).then((id) => {
            //     res.status(200).json("hi");
            // })
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
        }
    });
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/id', function(req, res, next) {
  admin.database().ref('user').set({
      username: "hi"
  }).then((id) => {
    res.status(200).json("hi");
  })
});

module.exports = router;
