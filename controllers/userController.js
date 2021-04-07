const router = require('express').Router();
const { User } = require('../models');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//CREATE A USER   user/create
router.post('/create', function (req, res){
    User.create({
        username: req.body.user.username,
        password: bcrypt.hashSync(req.body.user.password, 12),
        role: req.body.user.role
    })
    .then(
        function userCreateSuccess(user){

            let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});

            res.json({
                message: "User created successfully",
                sessionToken: token
            });
        }
    )
    .catch(err => res.status(500).json({error:err}))
});

//USER LOGIN  user/login
router.post('/login', function (req, res){
    User.findOne({
        where: {
            username: req.body.user.username
        }
    })
    .then(function userLoginSuccess(user){
        if (user) {
            bcrypt.compare(req.body.user.password, user.password, function(err, matches){
                if(matches){
                    let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
        
                    res.status(200).json({
                        user:user,
                        message: "User logged in successfully",
                        sessionToken: token           
                })
                } else {
                    res.status(502).json({error: "User login failed"})
                }
            })
        } else {
            res.status(500).json({error: "User does not exist"})
        }
    })
    .catch(err => res.status(500).json({error:err}))
})

module.exports = router;