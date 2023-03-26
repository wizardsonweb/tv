//imports
import './helpers/helpers';
const mysql = require('mysql');

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
    init: (app, dir) => {
        pages.forEach(page => {
            app.get(page, (req, res) => {
                hasIdentity(req, res, dir);
            });
        });
        
        app.post('/auth', (req, res) => {
            auth(db, req, res);
        });
    }
}