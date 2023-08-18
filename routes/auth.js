module.exports = {
    CheckAuth: async function(req, res, next) {
        console.log(req);
        console.log(req);
        console.log(req);
        console.log(req);
        console.log(req);
        if(req.isAuthenticated()) {
            console.log('로그인된 사용자입니다.')
            console.log('아이고야')
            console.log('꼬였네')
            console.log('꼬였어')
            next();
        }
        else {
            res.redirect('/user/signin');
        }
    },
}   