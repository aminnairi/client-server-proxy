const express = require("express");

const application = express();

application.use(express.static("static"));

application.listen(8000, () => console.log("Listening on http://127.0.0.1:8000"));
