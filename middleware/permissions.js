const User = require('../db').import('../models/user');

const authRole = (req, res, next) => {
    if (req.user.role !== role) {
        res.status(401)
        return res.send ("Not allowed")
    }
    next()
}

module.exports = authRole
