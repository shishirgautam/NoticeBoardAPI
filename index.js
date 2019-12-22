var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var userController = require('./controllers/User_Controller.js')

app.use(bodyParser.urlencoded({extended:true}))


app.post('/registration',userController.registerUser)


app.post('/login')


// app.use('/',function(req,res){
//     res.status(404)
//     res.send('NOT FOUND');
// })

app.get('/*', function(req,res){
    res.end('welcome to our new project')
});
app.listen(1337,function(){
    console.log('1337 port are ready to listen ?');
})