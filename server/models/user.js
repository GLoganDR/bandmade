'use strict';

var bcrypt = require('bcrypt'),
    Mailgun = require('mailgun-js'),
    mailKey = process.env.MAILGUN_APIKEY,
    mailDomain = process.env.MAILGUN_DOMAIN,
    Mongo  = require('mongodb');

function User(o){
  this.password      = bcrypt.hashSync(o.password, 10);
  this.email         = o.email;
  this.profileType   = o.profileType;

  this.hasEdited = false;
}

Object.defineProperty(User, 'collection', {
  get: function(){return global.mongodb.collection('users');}
});

User.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  User.collection.findOne({_id:_id}, cb);
};

User.register = function(o, cb){
  User.collection.findOne({email:o.email}, function(err, user){
    if(user || o.password.length < 3){return cb();}
    var u = new User(o);
    User.collection.save(u, cb);
  });
};

User.login = function(o, cb){
  User.collection.findOne({email:o.email}, function(err, user){
    if(!user){return cb();}
    var isOk = bcrypt.compareSync(o.password, user.password);
    if(!isOk){return cb();}
    cb(null, user);
  });
};

User.update = function(user, cb){
  console.log(user);
  user._id = Mongo.ObjectID(user._id);
  User.collection.save(user, cb);
};

User.find = function(cb){
  User.collection.find().toArray(cb);
};

User.sendMail = function(email ,cb){
  sendMail(email, cb);
};

//HELPER FUNCTIONS
function sendMail(email, cb){
  var mailgun = new Mailgun({apiKey:mailKey, domain:mailDomain}),
      data    = {from:email.email, to:'bandmade@mailinator.com', subject:email.subject, html:email.body};

  mailgun.messages().send(data, function(a, b , c){
    console.log(a, b, c);
    cb();
  });
}

module.exports = User;

