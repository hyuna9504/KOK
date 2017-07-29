var express = require('express');
var router = express.Router();
var admin = require("firebase-admin");
var AWS = require('aws-sdk');
var S3 = require('aws-sdk/clients/s3');

var s3 = new AWS.S3();

router.post('/upload', function(req, res, next) {
  //if (req.session.userId) {
  var id = "KqCskCK_JnEnM2V4HM7";
    var bucketName = 'unithon77';
    var keyName = 'images/' + id + '/' + Date.now();
    var encondedImage = new Buffer(req.body.image, 'base64').toString('UTF-8');
    var params = {
      Bucket: bucketName,
      Key: keyName,
      ACL: 'public-read',
      Body: encondedImage
    };
    s3.putObject(params, function(err, data) {
      if (err)
        console.log(err);
      else
        res.status(200).json({ message: "success" });
        console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
    });
  // } else {
  //   res.status(401).json({ err_msg: "not authorized" });
  // }
});

module.exports = router;
