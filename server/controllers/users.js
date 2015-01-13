'use strict';

var User = require('../models/user');

exports.register = function(req, res){
  User.register(req.body, function(err, user){
    if(user){
      logUserIn(user, req, res);
    }else{
      res.status(400).end();
    }
  });
};

exports.login = function(req, res){
  User.login(req.body, function(err, user){
    if(user){
      logUserIn(user, req, res);
    }else{
      res.status(401).end();
    }
  });
};

exports.logout = function(req, res){
  req.session.destroy(function(){
    res.setHeader('X-Authenticated-User', 'anonymous');
    res.status(200).end();
  });
};

exports.update = function(req, res){
  if(req.user){
    req.body.password = req.user.password;
  }
  User.update(req.body, function(err, response){
      if(response) {
        res.status(200).end();
      } else {
        res.status(500).end();
      }
  });
};

exports.show = function(req, res){
  User.findById(req.user._id, function(err, user){
    res.send({user: req.user});
  });
};

exports.displayProfile = function(req, res){
  User.findById(req.params.userId, function(err, user){
    res.send({user:user});
  });
};

exports.index = function(req, res){
  User.find(function(err, users){
    res.send({users:users});
  });
};

// send email //
exports.sendMail = function(req, res){
  console.log(req.body);
  User.sendMail(req.body, function(err){
    res.status(200).end();
  });
};

exports.checkSession = function(req, res){
  if(req.user){
    var userData = req.user;
    delete userData.password;
    res.send({user: userData});
  }else{
    res.send({user: {alias:'anonymous'}});
  }
};

// HELPER FUNCTION
function logUserIn(user, req, res){
  req.session.regenerate(function(){
    req.session.userId = user._id;
    req.session.save(function(){
      res.setHeader('X-Authenticated-User', user.email);
      var userData = user;
      delete userData.password;
      res.send({user: userData});
    });
  });
}
