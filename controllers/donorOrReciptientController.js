const router = require('express').Router();
const { DonorOrRecipient } = require('../models');

module.exports = router;



// const { DataTypes } = require("sequelize");
// const db = require("../db");

// const DonorOrRecipient = db.define("donororrecipient", {
//     donorId: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     recipientId: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     }
// });
// module.exports = DonorOrRecipient