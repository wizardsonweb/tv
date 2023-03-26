const { exec } = require('child_process');
const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const path = require('path');
//custom
const router = require('./db/controller');
const port = 4307;

//cors n other troubles
app.use(cors());
app.use(session({secret: 'secret', resave: true, saveUninitialized: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

//router
router.init(app);

//listen init
app.listen(port, () => {
  console.log('\n Listening on port: ' + port + '\n web: http://localhost:4307/ \n');
  exec('start cmd.exe && cd client && npm start')
});