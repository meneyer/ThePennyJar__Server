// const { Sequelize } = require('sequelize');
const Sequelize = require('sequelize');

// const db = new Sequelize('the-penny-jar-server', 'postgres', 'password', {
const sequelize = new Sequelize('the-penny-jar-server', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

const User = sequelize.import("./models/user");
const UserInfo = sequelize.import('./models/userInfo.js')
const Request = sequelize.import('./models/request');
const FinancialDonation = sequelize.import('./models/financialDonation.js')
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