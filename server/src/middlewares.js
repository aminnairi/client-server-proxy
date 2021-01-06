const cors = (request, response, next) => {
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
};

module.exports = {cors};
