"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./App");
var port = 3000;
App_1.default.listen(port, function () {
    console.log("Listening at port http://localhost:" + port + "/");
});
