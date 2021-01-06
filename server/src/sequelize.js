const {Sequelize} = require("sequelize");

const DATABASE_NAME = "database";
const DATABASE_USER = "user";
const DATABASE_PASSWORD = "password";
const DATABASE_HOST = "database";
const DATABASE_PORT = "5432";
const DATABASE_DIALECT = "postgres";

const sequelize = new Sequelize(`${DATABASE_DIALECT}://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`);

module.exports = {sequelize};
