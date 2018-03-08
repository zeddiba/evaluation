var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
const PORT = process.env.PORT || 5000;
var cors = require('cors');
// Initialize Express app
var app = express();
// Configure
app.use(cors());

// log every request to the console
app.use(morgan('dev'));
// For parsing HTTP responses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

let data = {
  question: 'Aimez-vous Javascript ?',
  reponses: {
    oui: 'Bon choix !',
    non:  'Zut !'
  }
};

app.get('/', function(req, res){
  return res.status(200).send({hi})
})

app.get('/api', function(req, res){
  return res.status(200).send({ data: data.question });
});

app.post('/api', function(req, res){
  let rep = req.body.response.toLowerCase() || null;
  return res.status(201).send({data: rep !== null ? data.reponses[rep] : {} });
})



app.listen(PORT);
