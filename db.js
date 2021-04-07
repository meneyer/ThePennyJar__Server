const { Sequelize } = require('sequelize');
// const Sequelize = require('sequelize');

const db = new Sequelize('the-penny-jar-server', 'postgres', 'password', {
// const sequelize = new Sequelize('the-penny-jar-server', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

// sequelize.authenticate().then(
//     function(){
//         console.log('connected to the penny jar server database');
//     },
//     function(err){
//         console.log(err);
//     }
// );

module.exports=db
// module.exports=Sequelize