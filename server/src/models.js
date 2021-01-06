const {DataTypes} = require("sequelize");
const {sequelize} = require("./sequelize.js");

const UserModel = {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
};

const User = sequelize.define("user", UserModel);

module.exports = {User};
