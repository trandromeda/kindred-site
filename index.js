const express = require('express');
const Mailchimp = require('mailchimp-api-v3');
require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');

var mc_api_key = process.env.MAILCHIMP_API_KEY;
var list_id = process.env.MAILING_LIST_ID;

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '.', 'build')));

const mailchimp = new Mailchimp(mc_api_key);
const port = process.env.PORT || 9001;

app.use(express.static(path.resolve(__dirname, '.', 'build')));
//routes
app.get('/api/memberList', (req, res) => {
  mailchimp.get(`/lists/${list_id}/members`)
  .then(function (results){
    res.send(results);
  })
  .catch(function (err){
    res.send(err);
  });
});

app.post('/api/subscribe', (req, res) => {
  const subscriber = {
    "email_address": req.body.email,
    "status": "pending",
    "merge_fields": {
      "FNAME": req.body.firstname,
      "LNAME": req.body.lastname
    }
  }

  mailchimp.post(`lists/${list_id}/members/`, subscriber)
  .then(function (data) {
    res.send(data)
  })
  .catch(function (err) {
    res.status(err.status || 500).send(err)
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '.', 'build', 'index.html'));
});

app.listen(port);
console.log(`express app listening on port ${port}`);

