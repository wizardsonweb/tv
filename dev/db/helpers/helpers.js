
const pages = ['/admin', '/user', '/'];

const hasIdentity = (req, res, path) => {
    const isOK = req.session.loggedin === true;
    const role = req.session.role;
    let url = req.url;

    if(!isOK){
        if(url === '/'){
            return res.sendFile(path + '/client/index.html');
        } else {
            return res.redirect('/')
        }
    } else {
        return res.redirect(role.toString());
    }
}

const auth = (db, req, res) => {
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
                req.session.role = role;

                return res.redirect(role.toString())
            }
        });

    } catch(error) {
        console.log('\n controller.js:" ' + error + '" \n');
    }
}