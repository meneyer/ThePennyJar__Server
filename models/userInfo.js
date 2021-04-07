const { DataTypes } = require("sequelize");
const db = require("../db");

const UserInfo = db.define("userInfo", {
    firstName:{
        type: DataTypes.STRING,
        allowNull: false,  
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: true
    },
    email:{
        type: DataTypes.STRING,
        allowNull: true
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: true
    },
    address:{
        type: DataTypes.STRING,
        allowNull: true
    },
    city:{
        type: DataTypes.STRING,
        allowNull: true
    },
    state:{
        type: DataTypes.STRING,
        allowNull: true
    },
    zipcode:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    owner: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});
module.exports = UserInfo


// {"userInfo":
//     {
//         "firstName": "",
//          "lastName": "",
//          "email": "",
//          "phone" : "",
//          "address": "",
//          "city": "",
//          "state": "",
//          "zipcode": #
//     }
// }