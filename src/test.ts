import { RelayZipUtils } from './utils/zip-utils';

let runZipTests = true;

// ZipUtils tests
if(runZipTests){
    let zipPath = "E:/test/4329bc17-28f8-4abd-bb5a-d157c5ba6368_0011524871.zip";
    RelayZipUtils.listEntries(zipPath);
} else {
    console.log("Zip tests are commented out.");
}

