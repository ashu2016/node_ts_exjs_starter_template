"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var relay_logger_1 = require("../Logger/relay-logger");
var AdmZip = require("adm-zip");
var logger = new relay_logger_1.RelayLogger();
var RelayZipUtils = /** @class */ (function () {
    function RelayZipUtils() {
    }
    RelayZipUtils.unzip = function (zipPath) {
        var zip = new AdmZip(zipPath);
    };
    RelayZipUtils.listEntries = function (zipPath) {
        var zip = new AdmZip(zipPath);
        var zipEntries = zip.getEntries(); // an array of ZipEntry records 
        logger.info("Total zip entries =  " + zipEntries.length);
        zipEntries.forEach(function (zipEntry) {
            logger.info(zipEntry.name); // outputs zip entries information            
        });
    };
    RelayZipUtils.extractZipTofolder = function (zipPath, extractPath) {
        logger.info("Extacting zip " + zipPath + " to path: " + extractPath);
        var zip = new AdmZip(zipPath);
        zip.extractAllTo(extractPath, false);
    };
    return RelayZipUtils;
}());
exports.RelayZipUtils = RelayZipUtils;
