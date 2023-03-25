const mysql = require('mysql');
const path = require('path');

//DB settings
const conf = {
    host:'localhost',
    user: 'root',
    password: '',
    database: 'appdb',
    port: '3306'
};
const db = mysql.createConnection(conf);

//custom
const hasIdentity = (req, res) => {
    const isOK = req.session.loggedin === true;
    const url = req.url;

    if(!isOK){
        res.redirect('/');
    } else {
        res.redirect(url.replace('/', ''));
    }
}

const pages = [ '/', '/admin', '/user' ];

module.exports =  {
    init: (app, dir) => {
        app.get('/', (req, res) => {
            res.sendFile(dir + '/!_public/index.html');
        })
        
        app.post('/auth', (req, res) => {
            auth(req, res);
        });
    }
}