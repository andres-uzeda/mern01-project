const usersController = {};

const User = require('../models/User');

usersController.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

usersController.createUsers = async (req, res) => {
    const {username} = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json({message:'user created'});
};

usersController.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};

usersController.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({message: `Note Deleted id: ${req.params.id}`});
};

usersController.updateUser = async (req, res) => {
    const {username} = req.body;
    await User.findOneAndUpdate({_id: req.params.id}, {
        username
    });
    res.json({message: `Note Updated id: ${req.params.id}`});
};

module.exports = usersController;