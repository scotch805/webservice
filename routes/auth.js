module.exports = {
    CheckAuth: async function(req, res, next) {
        console.log(req);
        console.log(req);
        console.log(req);
        console.log(req);
        if(req.isAuthenticated()) {
            console.log('로그인된 살인잡니다.')
            next();
        }
        else {
            res.redirect('/user/signin');
        }
    },
}   