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
        app.get('/experience', (req, res) => {
            let test = {
                name: 'Company 1',
                age: '1994 - 2013',
                desc: 'lorem ipsum dolor sit amet'
            }
            res.send(test)
        });
    }
}