const {cors} = require("./src/middlewares.js");
const {User} = require("./src/models.js");
const {sequelize} = require("./src/sequelize.js");
const {users} = require("./src/routes/users.js");
const express = require("express");

const main = async () => {
    const databaseConnection = await sequelize.authenticate();

    await User.sync({force: true});

    await User.create({username: "foo", password: "foo"});
    await User.create({username: "bar", password: "bar"});
    await User.create({username: "foobar", password: "foobar"});

    const application = express();

    application.use(cors);
    application.use("/users", users);
    application.listen(9000, () => console.log("Listening on http://localhost:9000"));
};

main().catch(({message}) => {
    console.error(message);
});
