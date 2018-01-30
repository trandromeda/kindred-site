const express = require('express');
const Mailchimp = require('mailchimp-api-v3');
require('dotenv').config();
const bodyParser = require('body-parser');

var mc_api_key = process.env.MAILCHIMP_API_KEY;
var list_id = process.env.MAILING_LIST_ID;

const app = express();
app.use(bodyParser.json());

const mailchimp = new Mailchimp(mc_api_key);
const port = process.env.PORT || 9001;

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
  console.log(req.body);
  res.send(req.body);

  // mailchimp.post('/lists/$(list_id)/members/')
  // .then(function (data) {
  //   res.send(data)
  // })
  // .catch(fundtion (err) {
  //   res.send(err);
  // })
})


app.listen(port);
console.log(`express app listening on port ${port}`);

