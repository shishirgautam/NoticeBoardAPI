var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.post('/registration',function(req,res){
    res.send('this is the Registration page')

})
app.post('/login')


app.use('/',function(req,res){
    res.status(404)
    res.send('NOT FOUND');
})

app.get('/*', function(req,res){
    res.end('welcome to our new project')
});
app.listen(1337,function(){
    console.log('1337 port are ready to listen ?');
})