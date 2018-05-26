var mongoose = require("mongoose");
require("../models/db")
var Account = require("../models/account");

var passport = require('passport');

//welcome page
module.exports.welcome = index;
function index(req, res){
    res.render('index', { user : req.user, title : 'gameDev' });
}

//profile page
module.exports.profile = function(req, res){
    res.render('profile', { user : req.user, title : 'Profile' });
}

//chat page
module.exports.chat = function(req, res){
    res.render('chat', { user : req.user, title : 'Chat' });
}

//about page
module.exports.about = function(req, res){
    res.render('about', { user : req.user, title : 'About' });
}

//var Account = mongoose.model('Account');

module.exports.register = function(req, res) {
    res.render('registeruser', { user : req.user, title : 'Register' });
};


module.exports.regist = function(req, res) {
    Account.register(new Account({ username : req.body.username }), 
           req.body.password, 
       function(err, account) {
                 if (err) {
                   return res.render('register', { msg : 'rego failed'});
                 }
                 passport.authenticate('local')(req, res, function () {
                   res.redirect('/');

                   });
               });
};

module.exports.loginForm = function(req, res) {
    res.render('loginpage', { user : req.user, title: "Login"});
};

module.exports.login =  function(req, res) {
   passport.authenticate('local')(req, res, function () {
        res.redirect('/');
    });
    
// passport.authenticate('local', { successRedirect: '/',
//         failureRedirect: '/login'
//         failureFlash: true 
//});
    
};

module.exports.logout = function(req, res) {
    req.logout();
    res.redirect('/');
};
