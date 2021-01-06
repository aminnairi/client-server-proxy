const express = require("express");

const application = express();

application.use((request, response, next) => {
    const { origin } = request.headers;

    if (typeof origin !== "string") {
        return response.sendStatus(403);
    }

    const origins = [
        "http://application.local",
        "http://www.application.local"
    ];

    if (!origins.includes(origin)) {
        return response.sendStatus(403);
    }

    response.header("Access-Control-Allow-Origin", origin);

    return next();
});

application.get("/ping", (request, response) => response.send("pong"));

application.listen(9000, () => console.log("Listening on http://localhost:9000"));
