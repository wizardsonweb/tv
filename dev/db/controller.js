const mysql = require('mysql');
const path = require('path');

//DB settings and sql strings
const conf = {
    host:'localhost',
    user: 'root',
    password: '',
    database: 'appdb',
    port: '3306'
};
const db = mysql.createConnection(conf);

const authsql = 'SELECT * FROM accounts WHERE username = ? AND password = ? LIMIT 1';

//Render func
const render = (res, render) => {
    let viewFile = path.join(__dirname, '../client/views/') + render;
    res.render(viewFile);
}


module.exports = {
    router: (app) => {
        app.get('/', (req, res) => {
            render(res, 'index')
        });

        app.get('/auth', (req, res) => {
            try {
                app.post('/auth', (req, res) => {
                    let username = req.body.username;
                    let password = req.body.password;
        
                    db.query(authsql, [username, password], (error, results) => {
                        if(error) throw error;
    
                        let role = results[0].role;
                        
                        if(results.length > 0 && role !== 0) {
                            req.session.loggedin = true;
                            req.session.username = username;
                            req.session.role = role;
            
                            if(role === 'admin') {
                                res.render(dash);
                            } else {
                                return res.redirect('home');
                            }
                        } else {
                            res.redirect('/');
                        }
                    });
                });
            } catch(error) {
                return console.log(error);
            }
        });

        app.get('/dash', (req, res) => {
        });

        app.get('/home', (req, res) => {

        });
    }
}