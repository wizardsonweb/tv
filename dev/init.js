const express = require('express');
const session = require('express-session');
const path = require('path');
const cors = require('cors');
const router = require('./db/controller');

const app = express();
const port = 4307;

app.use(cors());
app.use(session({secret: 'secret', resave: true, saveUninitialized: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

router.init(app, __dirname);
        
app.get('*', function(req, res){
  res.sendFile(__dirname + '/!_public/404.html');
});

app.listen(port, (req, res) => {
    console.log('\n Listening on port: ' + port + '.\n');
});