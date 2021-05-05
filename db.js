// const { Sequelize } = require('sequelize');
const Sequelize = require('sequelize');

// TO RUN ON HEROKU (USE 5-14 instead of 17-20)
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    // host: 'localhost',
    dialect: 'postgres',
    dialectOptions:{
        ssl:{
            require:true,
            rejectUnauthorized: false,
        }
    }
});

//TO RUN LOCALLY (USE 17-20 instead of 5-14)
// const sequelize = new Sequelize('the-penny-jar-server', 'postgres', 'password', {
//     host: 'localhost',
//     dialect: 'postgres'
// });

const User = sequelize.import("./models/user");
const UserInfo = sequelize.import('./models/userInfo')
const Request = sequelize.import('./models/request');
const FinancialDonation = sequelize.import('./models/financialDonation')
// const DonorOrRecipient = sequelize.import('./models/donorOrRecipient.js')

UserInfo.belongsTo(User)
User.hasOne(UserInfo)

FinancialDonation.belongsTo(User)
User.hasMany(FinancialDonation)

Request.belongsTo(User)
User.hasMany(Request)

// DonorOrRecipient.belongsTo(FinancialDonation)
// FinancialDonation.hasOne(DonorOrRecipient)

// DonorOrRecipient.belongsTo(Request)
// Request.hasOne(DonorOrRecipient)

// module.exports=db
module.exports=sequelize