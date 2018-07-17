import { Logger } from '../Logger/logger';
import AdmZip = require('adm-zip');


let logger = new Logger();
export class ZipUtils {
    
    public static unzip(zipPath:string){
        const zip = new AdmZip(zipPath);
    }

    public static listEntries(zipPath:string){
        const zip = new AdmZip(zipPath);
        var zipEntries = zip.getEntries(); // an array of ZipEntry records 
        logger.info(`Total zip entries =  ${zipEntries.length}`);
        zipEntries.forEach(function(zipEntry) {
            logger.info(zipEntry.name); // outputs zip entries information            
        });      
    }

    public static extractZipTofolder(zipPath:string,extractPath : string){
        logger.info(`Extacting zip ${zipPath} to path: ${extractPath}`);
        const zip = new AdmZip(zipPath);
        zip.extractAllTo(extractPath,false); 
           
    }
}