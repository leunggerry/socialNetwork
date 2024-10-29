/**
 * Import User Models
 */

const { User } = require("../models");

const authController = {
    // Functions for Authencation and User Sign Up

    /**
     *
     * @param {*} param0
     * @param {*} res
     */
    createUser({ body }, res) {
        //console.log(User);
        User.create(body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(400).json(err));
    },

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

    deleteUser({ params }, res) {
        User.findOneAndDelete({ username: params.username }).then((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({ message: "No user found with this username" });
                return;
            }
        });
    },
};

module.exports = authController;
