const {Router} = require("express");
const users = Router();
const {User} = require("../models.js");

users.get("/", async (request, response) => {
    try {
        const users = await User.findAll();

        response.json({success: true, data: users});
    } catch (error) {
        response.status(500).json({success: false, error: error.message});
    }
});

module.exports = {users};
