//imports
const mysql = require('mysql');
const lib = require('./helpers/helpers');

//DB settings, sql
const conf = {
    host:'localhost',
    user: 'root',
    password: '',
    database: 'appdb',
    port: '3306'
};
const db = mysql.createConnection(conf);

//exports
module.exports =  {
    init: (app) => {
        app.post('/auth', (req, res) => {
            lib.auth(db, req, res);
        });

        app.get('/test', (req, res) => {
            res.send('wa wa wa')
        })
    }
}