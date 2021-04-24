const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.get('/users/singin', (req, res) => {
    res.render("users/singin");
})

router.get('/users/singup', (req, res) => {
    res.render("users/singup");
})

router.post("/user/singup", async (req, res) => {
    const { name, email, password, confirm_password} = req.body;
    const errors = [];
    if(name.length <= 0) {
        errors.push("Please insert a name");
    }
    if (password != confirm_password) {
        errors.push({text: "Passwords do not match"});
    }
    if (password.length < 4) {
        errors.push({ text: "Password must be at least 4 characters"});
    }
    if(errors.length > 0) {
        res.render("users/singup", {errors, name, email, password, confirm_password});
    } else {
        const newUser = new User({name, email, password})
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
    }
})

module.exports = router;