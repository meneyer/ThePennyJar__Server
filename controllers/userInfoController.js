const router = require('express').Router();
let validateSession = require('../middleware/validate-session')
const UserInfo = require('../db').import('../models/userInfo');


//FILL OUT USER INFO  /profile/
router.post('/', validateSession, function (req, res) {
    console.log(req.user.id)
    const profile = {
        firstName: req.body.userInfo.firstName,
        lastName: req.body.userInfo.lastName,
        email: req.body.userInfo.email,
        phone: req.body.userInfo.phone,
        address: req.body.userInfo.address,
        city: req.body.userInfo.city,
        state: req.body.userInfo.state,
        zipcode: req.body.userInfo.zipcode,
        userId: req.user.id
    }
    UserInfo.create(profile)
    .then(profile => res.status(200).json(profile))
    .catch(err => res.status(500).json({error: err}))
})

// GET ALL PROFILES FROM EVERYONE
router.get("/", function(req, res) {
    UserInfo.findAll()
        .then((profile) => res.status(200).json(profile))
        .catch((err) => res.status(500).json({error:err}));
    })

//GET A SINGLE USERS PROFILE  /profile/myprofile
router.get("/myprofile", validateSession, function(req, res){
    const query = {
        where:{userId: req.user.id},
        include:"user"
    }

    UserInfo.findOne(query)
        .then((profile) => res.status(200).json(profile))
        .catch((err) => res.status(500).json({error: err}));
    })

// UPDATE A PROFILE    /profile/update/:zipcodeId
router.put('/update/:zipcodeId', validateSession, function(req, res) {
    const updateProfile = {
        lastName: req.body.userInfo.lastName,
        email: req.body.userInfo.email,
        phone: req.body.userInfo.phone,
        address: req.body.userInfo.address,
        city: req.body.userInfo.city,
        state: req.body.userInfo.state,
        zipcode: req.body.userInfo.zipcode,
        userId: req.user.id
    }
    const query = {where: {id: req.params.zipcodeId, userId: req.user.id}}

    UserInfo.update(updateProfile, query)
    .then((profileupdate) => res.status(200).json(profileupdate))
    .catch((err) => res.status(500).json({error:err}))
})

// DELETE A PROFILE   /profile/delete/:id
router.delete('/delete/:id', validateSession, function(req, res) {
    const query = {where: {id: req.params.id, userId: req.user.id}};

    UserInfo.destroy(query)
    .then(() => res.status(200).json({message: "This profile has been removed"}))
    .catch((err) => res.status(500).json({error:err}));
});

module.exports = router;