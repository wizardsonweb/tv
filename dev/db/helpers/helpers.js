module.exports = {
    auth: (db, req, res) => {
        const authSql = 'SELECT * FROM `accounts` WHERE username = ? AND password = ? LIMIT 1';
        let uname = req.session.username;
        let pass = req.session.password;

        try {
            db.query(authSql, [uname, pass], (err, results) => {
                let role = results[0].role;
        
                if(err) { 
                    return res.redirect('/') 
                } 
                else {
                    req.session.loggedin = true;
                    return res.redirect(role.toString())
                }
            });

        } catch(error) {
            console.log('\n controller.js:" ' + error + '" \n');
        }
    }
}