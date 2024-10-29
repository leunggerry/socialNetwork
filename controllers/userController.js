const { User } = require("../models");

const userController = {
    getUsers(req, res) {
        User.find({})
            .then((dbUserData) => {
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(error);
            });
    },
};

module.exports = userController;
