var user = require('../models/UserModel.js')


// user.findOne({
//     where:{username:req.body.username}
// })

function registerUser (req,res,next){
    console.log(req.body);
user.create({
    username:req.body.username,
    password:req.body.password, //hashgen
    address:req.body.address
})
.then(function(result){
    res.status(201);
    res.json({
        status:201,
        messsage:"you have been registered"
  
})
   })
   .catch(function(err){
       console.log(err)
       next(err);
   })


}
module.exports ={
    registerUser
}