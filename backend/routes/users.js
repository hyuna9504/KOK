var express = require('express');
var router = express.Router();
var admin = require("firebase-admin");

var client_id = 'SywgbqwVSP4an161TdKS';
var client_secret = 'DhTfuacMl_';
var state = "RANDOM_STATE";
var redirectURI = encodeURI("http://localhost:8080/main");
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
      req.session.token = JSON.parse(body).access_token;
      res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });
});

router.get('/signin', function (req, res) {
   var token = req.session.token;
   var header = "Bearer " + token;
   var api_url = 'https://openapi.naver.com/v1/nid/me';
   var request = require('request');
   var options = {
       url: api_url,
       headers: {'Authorization': header}
    };
   request.get(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       const email = JSON.parse(body).response.email;
       admin.database().ref('users').orderByChild('email').equalTo(email).once('value')
         .then((user) => {
           if (user.val() === null) {
             console.log("new user");
             const newRef = admin.database().ref('users').push();
             const newKey = newRef.key;
             const userObj = {
               id: newKey,
               email: email
             };
             newRef.set(userObj)
               .then(() => {
                 req.session.userId = newKey;
                 res.status(200).json({ id: req.session.userId });
               })
               .catch((err) => {
                 res.status(400).json({ err_msg: err.message });
               });
           } else {
             console.log("exists");
             req.session.userId = Object.keys(user.val())[0];
             res.status(200).json({ id: req.session.userId });
           }
         });
     } else {
       console.log('error');
       if(response != null) {
         res.status(response.statusCode).end();
         console.log('error = ' + response.statusCode);
       }
     }
   });
 });

router.get('/add', function(req, res, next) {
  const newRef = admin.database().ref('users').push();
  const newKey = newRef.key;
  const userObj = {
    id: newKey,
    name: "sarah"
  };
  newRef.set(userObj)
    .then(() => {
      return admin.database().ref('users').child(newKey).once('value');
    })
    .then((snap) => res.status(200).json(snap))
    .catch((err) => {
      res.status(400).json({ err_msg: err.message });
    });
});

router.post('/account', function(req, res, next) {
  const id = req.session.userId;
  admin.database().ref('users').orderByChild('id').equalTo(id).once('value')
    .then((user) => {
      if (user.val() === null) {
        throw new Error("No matching user");
      }
      const key = Object.keys(user.val());
      return admin.database().ref('users').child(key[0]).set({
        id: id,
        bank: req.body.bank,
        accountNumber: req.body.accountNumber
      });
    })
    .then(() => {
      res.status(200).json({ message: "success adding account info"});
    })
    .catch((err) => {
      res.status(400).json({ err_msg: err.message });
    });
});

module.exports = router;
