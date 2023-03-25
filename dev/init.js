const express = require('express');
const session = require('express-session');
const path = require('path');
const cors = require('cors');
const lib = require('./client/lib/lib');

const app = express();
const port = 4307;

app.use(cors());
app.use(session({secret: 'secret', resave: true, saveUninitialized: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');

app.listen(port, (req, res) => {
    console.log('\n Listening on port: ' + port + '.\n');
});