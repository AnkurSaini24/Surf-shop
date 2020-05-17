const User = require('../models/user');

module.exports = {
    postRegister(req,res,next){
      const newuser =new User({
        username: req.body.username,
        email:req.body.email,
        image:req.body.image
      })

        User.register(newuser, req.body.password, (err) => {
          if (err) {
            console.log('error while user register!', err);
            return next(err);
          }
      
          console.log('user registered!');
      
          res.redirect('/');
        });        
    }
}