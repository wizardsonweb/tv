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
    db.query(sql, (err, res) => {
        if(err) {
            console.log('\n db already exists \n');
            process.exit();
        } else {
            console.log('\n database created \n');
            process.exit();
        }
    });
} catch(error) {
    console.log('db.js: \n' + error);
}

