const express = require('express');
const FeedBack = require('../models/models');
const router = new express.Router();

router.get('/', (req,res) => {
    res.status(201).render('index');
});

router.post('/contact', async (req,res) => {
    try {
        // const {name, email, phone, message} = req.body;

        const userData = new FeedBack(req.body);
        await userData.save();
        res.status(201).render('index');
    
        // console.log(name,email,phone,message)
        
    } catch (err) {
        res.status(401).render('error',{ err });
    }
    
});

router.get('*', (req,res) => {
    res.status(401).render('error',{
        err: "Page not Found"
    });
});

module.exports = router;