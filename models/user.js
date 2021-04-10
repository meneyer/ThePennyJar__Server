// const { DataTypes } = require("sequelize");
// const db = require("../db");

module.exports = function (sequelize, DataTypes) {
const User = sequelize.define("user", {
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    role:{
        type: DataTypes.STRING,
        allowNull: false,
    }
});
return User
}
// module.exports = User

// {"user":
//     {
//         "username": "ENTER****HERE",
//         "password": "ENTER****HERE",
//          "role" : "ENTER*****HERE"  (must be admin, recipient, or donor)
//     }
// }