var Sequelize = require('sequelize')
var sequelize = new Sequelize('noticeboard','root','rootpasswordgiven',{
host:'localhost',
dialect:'mysql'
});

// sequelize.authenticate()
// .then(
//     function(){
//         console.log('database connection sucessful')
//     }
// )
// .catch(function(err){
//     console.log(err)
// })

module.exports = {
    Sequelize, sequelize
}