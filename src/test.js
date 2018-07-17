"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zip_utils_1 = require("./utils/zip-utils");
var runZipTests = true;
// ZipUtils tests
if (runZipTests) {
    var zipPath = "E:/test/4329bc17-28f8-4abd-bb5a-d157c5ba6368_0011524871.zip";
    zip_utils_1.RelayZipUtils.listEntries(zipPath);
}
else {
    console.log("Zip tests are commented out.");
}
