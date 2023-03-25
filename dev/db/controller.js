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
const hasIdentity = (req, res, path) => {
    const isOK = req.session.loggedin === true;
    const url = req.url;

    if(!isOK){
        if(url !== '/') {
            return res.redirect('/');
        } else {
            return res.sendFile(path + '/!_public/index.html');
        }
    } else {
        return res.redirect(url.toString());
    }
}

module.exports =  {
    init: (app, dir) => {
        app.get('/', (req, res) => {
            hasIdentity(req, res, dir);

        })
        
        app.post('/auth', (req, res) => {
            auth(req, res);
        });
    }
}