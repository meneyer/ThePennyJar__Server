const router = require('express').Router();
let validateSession = require('../middleware/validate-session')
const { Request } = require('../models');


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
        recipientId: req.user.id,      
    }
    Request.create(needAPennyRequest)
    .then(needAPennyRequest => res.status(200).json(needAPennyRequest))
    .catch(err => err.status(500).json({error: err}))
})

router.get("/", validateSession, function(req, res){
    const query = {
        where:{userId: req.user.id},
        include:"user"
    }
    
    Request.findAll(query)
        .then((needAPennyRequest) => res.status(200).json(needAPennyRequest))
        .catch((err) => res.status(500).json({error:err}));
    })


module.exports = router