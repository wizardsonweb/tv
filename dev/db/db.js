const mysql = require('mysql');
const conf = {
	host     : 'localhost',
	user     : 'root',
	password : '',
    multipleStatements : 'true'
};
const db = mysql.createConnection(conf);
const fs = require('fs');
const path = require('path');
const sql = fs.readFileSync(path.join(__dirname + '/db.sql')).toString();

try {
    return db.query(sql, (err, res) => {
        if(err) throw err;

        if(res > 0) {
            return console.log('\n db created \n');
        } else {
            return console.log('\n db already exists \n');
        }
    });
} catch(error) {
    return console.log(error);
}

