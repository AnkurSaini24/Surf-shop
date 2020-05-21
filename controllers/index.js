const User = require('../models/user');

module.exports = {
    async postRegister(req,res,next){
      const newuser =new User({
        username: req.body.username,
        email:req.body.email,
        image:req.body.image
      });
      
      User.register(newuser, req.body.password);            
      res.redirect('/');       
    }
}