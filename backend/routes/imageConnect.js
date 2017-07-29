var express = require('express');
var router = express.Router();
var admin = require("firebase-admin");
var AWS = require('aws-sdk');
var S3 = require('aws-sdk/clients/s3');

var s3 = new AWS.S3();

router.post('/upload', function(req, res, next) {
  //if (req.session.userId) {
  var id = "KqCskCK_JnEnM2V4HM7";
    var bucketName = 'unithon777';
    var keyName = 'images/' + id + '/' + Date.now() + '.png';
    var encondedImage = new Buffer(req.body.image.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    var params = {
      Bucket: bucketName,
      Key: keyName,
      ACL: 'public-read',
      Body: encondedImage
    };
    s3.putObject(params, function(err, data) {
      if (err) {
        res.status(400).json({ err_msg: err.message });
      } else {
        const rek = new AWS.Rekognition({region:'us-west-2'});
        console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
        const params = {
          "Image": {
            "S3Object": {
              "Bucket": bucketName,
              "Name": keyName,
            },
          },
          "MaxLabels": 10,
          "MinConfidence": 50,
        };

        rek.detectLabels(params, function (err, data) {
          if (err) {
            res.status(400).json({ err_msg: err.message });
          }
          console.log('Analysis labels:', data);

          res.status(200).json({ image: keyName, label: data.Labels});
        })
      }
    });
  // } else {
  //   res.status(401).json({ err_msg: "not authorized" });
  // }
});

module.exports = router;
