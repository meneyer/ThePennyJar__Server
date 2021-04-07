const { DataTypes } = require("sequelize");
const db = require("../db");

const FinancialDonation = db.define("financialdonation", {
    choice: {
        type: DataTypes.BOOLEAN,
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
    donorId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    owner: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});
module.exports = FinancialDonation

// {"financialDonation":
//     {
//         "choice": false or true,
//         "amount": #,
//         "taxReceipt": false or true,
//     }
// }