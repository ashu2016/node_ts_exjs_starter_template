"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log4js = require("log4js");
var RelayLogger = /** @class */ (function () {
    /**
     *
     */
    function RelayLogger() {
        RelayLogger.logger = log4js.getLogger();
        log4js.configure({
            appenders: {
                everything: { type: 'file', filename: './logs/logs.log', maxLogSize: 10485760, backups: 10, compress: true }
            },
            categories: {
                default: { appenders: ['everything'], level: 'debug' }
            }
        });
    }
    RelayLogger.prototype.info = function (message) {
        RelayLogger.logger.info(message);
    };
    RelayLogger.prototype.debug = function (message) {
        RelayLogger.logger.debug(message);
    };
    RelayLogger.prototype.warn = function (message) {
        RelayLogger.logger.warn(message);
    };
    RelayLogger.prototype.error = function (message) {
        RelayLogger.logger.error(message);
    };
    RelayLogger.prototype.fatal = function (message) {
        RelayLogger.logger.fatal(message);
    };
    return RelayLogger;
}());
exports.RelayLogger = RelayLogger;
