// const { DataTypes } = require("sequelize");
// const db = require("../db");

module.exports = function (sequelize, DataTypes) {

const FinancialDonation = sequelize.define("financialdonation", {
    choice: {
        type: DataTypes.STRING,
        allowNull: false,           
    },
    amount:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    taxReceipt:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    messageToRecipient:{
        type: DataTypes.STRING(2000),
        allowNull:true,
    },
    // donorId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    // userId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // }
});
return FinancialDonation
};
// module.exports = FinancialDonation

// {"financialDonation":
//     {
//         "choice": false or true,
//         "amount": #,
//         "taxReceipt": false or true,
//     }
// }