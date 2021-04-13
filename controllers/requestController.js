const router = require('express').Router();
let validateSession = require('../middleware/validate-session')
const Request= require('../db').import('../models/request');

//POST A REQUEST   /needapenny/
router.post('/', validateSession, function (req, res){
    console.log(req.user.id);
    const needAPennyRequest = {
        displayName: req.body.request.displayName,
        description: req.body.request.description,
        item: req.body.request.item,
        dateRequested: req.body.request.dateRequested,
        dateNeeded: req.body.request.dateNeeded,
        giftRecipient: req.body.request.giftRecipient,
        link: req.body.request.link, 
        messageToDonor: req.body.request.messageToDonor,       
        requestFilled: req.body.request.requestFilled,
        // requestFilled: req.financialdonation.id,
        userId: req.user.id, 
        role: req.user.role     
    }
    Request.create(needAPennyRequest)
    .then(needAPennyRequest => res.status(200).json(needAPennyRequest))
    .catch(err => res.status(500).json({error: err}))
})

//GET ALL REQUESTS BY ALL USERS  /needapenny/
router.get("/", function(req, res){
    Request.findAll()
        .then((needAPennyRequest) => res.status(200).json(needAPennyRequest))
        .catch((err) => res.status(500).json({error:err}));
    })


//GET A SINGLE USERS REQUESTS  /needapenny/myrequests
router.get("/myrequests", validateSession, function(req, res){
    const query = {
        where:{userId: req.user.id},
        include:"user"
    }
    
    Request.findAll(query)
        .then((needAPennyRequest) => res.status(200).json(needAPennyRequest))
        .catch((err) => res.status(500).json({error:err}));
    })

// UPDATE A SINGLE USERS REQUESTS  /needapenny/update/:linkId
router.put('/update/:linkId', validateSession, function(req, res) {
    if(req.user.role === 'donor'){
        res.send({error: "Not Authorized, Restricted Route"})
    }
    const updateRequest = {
        displayName: req.body.request.displayName,
        description: req.body.request.description,
        item: req.body.request.item,
        dateRequested: req.body.request.dateRequested,
        dateNeeded: req.body.request.dateNeeded,
        giftRecipient: req.body.request.giftRecipient,
        link: req.body.request.link,
        messageToDonor: req.body.request.messageToDonor,      
        requestFilled: req.body.request.requestFilled,
        userId: req.user.id,
    }

    const query = {where: {id: req.params.linkId, userId: req.user.id}}
    const admin = {where: {id: req.params.linkId}}

    if (req.user.role ==='user'){
        Request.update(updateRequest, query)
        .then((request) => res.status(200).json(request))
        .catch((err) => res.status(500).json({error:err}))
    } else {
        Request.update(updateRequest, admin)
        .then((request) => res.status(200).json(request))
        .catch((err) => res.status(500).json({error:err}))
    }
})

// DELETE A REQUEST   /needapenny/delete/:id
router.delete('/delete/:id', validateSession, function(req, res) {
    const query = {where: {id: req.params.id, userId: req.user.id}};

    Request.destroy(query)
    .then(() => res.status(200).json({message: "This request has been removed"}))
    .catch((err) => res.status(500).json({error:err}));
});

module.exports = router