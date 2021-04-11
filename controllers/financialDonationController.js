const router = require('express').Router();
let validateSession = require('../middleware/validate-session')
const FinancialDonation = require('../db').import('../models/financialDonation');

// MAKE A DONATION   /giveapenny/
router.post('/', validateSession, function (req, res){
    console.log(req.user.id);
    const giveAPenny = {
        choice: req.body.financialdonation.choice,
        amount: req.body.financialdonation.amount,
        taxReceipt: req.body.financialdonation.taxReceipt,
        // donorId: req.body.donorId,      
        userId: req.user.id,      
    }
    FinancialDonation.create(giveAPenny)
    .then(giveAPenny => res.status(200).json(giveAPenny))
    .catch(err => res.status(500).json({error: err}))
})

//GET ALL DONATIONS BY ALL USERS  /giveapenny/
router.get("/", validateSession, function(req, res){
    if(req.user.role !=='admin'){
        res.send({error: "Not Authorized, admin only"})
    }
    FinancialDonation.findAll()
        .then((giveAPenny) => res.status(200).json(giveAPenny))
        .catch((err) => res.status(500).json({error:err}));
    })

// GET A SINGLE USERS DONATIONS  /giveapenny/mydonations
router.get("/mydonations", validateSession, function(req, res){
    const query = {
        where:{userId: req.user.id},
        include:"user"
    }
    
    FinancialDonation.findAll(query)
        .then((giveAPenny) => res.status(200).json(giveAPenny))
        .catch((err) => res.status(500).json({error:err}));
    })

// UPDATE A SINGLE USERS DONATIONS  /needapenny/update/:taxReceiptId
router.put('/update/:taxReceiptId', validateSession, function(req, res) {
    const updateDonation = {
        choice: req.body.financialdonation.choice,
        amount: req.body.financialdonation.amount,
        taxReceipt: req.body.financialdonation.taxReceipt,           
        userId: req.user.id,       
    }

    const query = {where: {id: req.params.taxReceiptId, userId: req.user.id}}

    FinancialDonation.update(updateDonation, query)
    .then((giveAPenny) => res.status(200).json(giveAPenny))
    .catch((err) => res.status(500).json({error:err}))
})

// DELETE A DONATION   /needapenny/delete/:id
router.delete('/delete/:id', validateSession, function(req, res) {
    const query = {where: {id: req.params.id, userId: req.user.id}};

    FinancialDonation.destroy(query)
    .then(() => res.status(200).json({message: "This donation has been removed"}))
    .catch((err) => res.status(500).json({error:err}));
});

module.exports = router;