const User = require ("./user.js");
const UserInfo = require ('./userInfo.js')
const Request = require ('./request.js');
const FinancialDonation = require ('./financialDonation.js')
const DonorOrRecipient = require ('./donorOrRecipient.js')

User.hasOne(UserInfo)
UserInfo.belongsTo(User)

User.hasMany(FinancialDonation)
FinancialDonation.belongsTo(User)

User.hasMany(Request)
Request.belongsTo(User)

FinancialDonation.hasOne(DonorOrRecipient)
DonorOrRecipient.belongsTo(FinancialDonation)

Request.hasMany(Request)
DonorOrRecipient.belongsTo(Request)

module.exports = {
    User,
    UserInfo,
    Request,
    FinancialDonation,
    DonorOrRecipient
};