// const { DataTypes } = require("sequelize");
// const db = require("../db");

module.exports = function (sequelize, DataTypes) {

const Request = sequelize.define("request", {
    displayName:{
        type: DataTypes.STRING,
        allowNull: false,  
    },
    description:{
        type: DataTypes.STRING(1000),
        allowNull: false,
    },    
    item:{
        type: DataTypes.STRING,
        allowNull: false
    },
    dateRequested:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    dateNeeded:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    giftRecipient:{
        type: DataTypes.STRING,
        allowNull: true
    },
    link:{
        type: DataTypes.STRING,
        allowNull: true
    },
    requestFilled:{
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    // recipientId:{
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    // owner: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // }
});
// module.exports = Request
return Request
};

// {"request":
//     {
//         "displayName": "",
//         "description": "",
//         "item" : "",
//         "dateRequested": 2021-04-12,
//         "dateNeeded": 2021-05-12,
//         "giftRecipient" : "",
//         "link": "",          
//     }
// }