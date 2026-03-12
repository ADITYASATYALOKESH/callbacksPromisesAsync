const express = require("express");
const app = express();
const route = require("./Router/FirstRouter.js");
app.use('/', route);
app.listen(8008, () => {
    console.log("Server started on port 8008");
});