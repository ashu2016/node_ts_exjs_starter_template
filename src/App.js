"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var routes_1 = require("./routes");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.mountRoutes();
    }
    App.prototype.mountRoutes = function () {
        this.express.use('/welcome', routes_1.WelcomeRoute);
        this.express.use('/', routes_1.WelcomeRoute);
    };
    return App;
}());
exports.default = new App().express;
