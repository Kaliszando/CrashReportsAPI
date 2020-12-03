const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET all
router.get('/', async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    }  catch(err) {
        res.json({ message: err })
    }
});

// GET one by id
router.get('/:userId', async (req, res) => {
    try{
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch(err) {
        res.json({ message: err});
    }
})

// POST
router.post('/', async (req, res) => {
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: req.body.age,
        date: req.body.date
    });

    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch(err) {
        res.json({ message: err });
    }

})

// DELETE
router.delete('/:userId', async (req, res) => {
    try {
        const removedUser = await User.remove({ _id: req.params.userId });
        res.json(removedUser);
    } catch(err) {
        res.json({ message: err });
    }

})

// UPDATE
router.patch('/:userId', async (req, res) => {
    try {
        const updatedUser = await User.updateOne({
            _id: req.params.userId },
            { $set: { age: req.body.age } }
        );
        res.json(updatedUser);
    } catch(err) {
        res.json({ message: err });
    }
})

module.exports = router;