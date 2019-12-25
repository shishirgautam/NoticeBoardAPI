var user = require('../models/UserModel.js')

function validation (req,res, next){
    //console.log(req.body.username);

user.findOne({
    where:{username:req.body.username}
})
.then(function(result){
    if(result == null){
        next();
    }
    else{
        //console.log('user was already registered');
        //res.status(409);
        res.json({
            status:409,
            messsage:'You are already registered'
    });
    }
})
.catch(function(err){
    next(err)
})

}



function registerUser (req,res,next){
    console.log(req.body);
user.create({
    username:req.body.username,
    password:req.body.password, //hashgen
    address:req.body.address
})
.then(function(result){
    //res.status(201);
    res.json({
        status:201,
        messsage:'you have been registered'
  
})
   })
   .catch(function(err){
       console.log(err)
       next(err);
   })


}
module.exports = {
    registerUser ,validation
}