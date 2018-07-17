import * as log4js from 'log4js';

export class RelayLogger {

    static logger:log4js.Logger;
     /**
      *
      */
     constructor() {
         RelayLogger.logger = log4js.getLogger();      
        log4js.configure({
         appenders: {
           everything: { type: 'file', filename: './logs/logs.log', maxLogSize: 10485760, backups: 10, compress: true }
         },
         categories: {
           default: { appenders: [ 'everything' ], level: 'debug'}
         }
       });
     }
 
     public  info(message:string){
         RelayLogger.logger.info(message);
     }
 
     public   debug(message:string){
         RelayLogger.logger.debug(message);
     }
 
     public  warn(message:string){
         RelayLogger.logger.warn(message);
     }
 
     public  error(message:string){
         RelayLogger.logger.error(message);
     }
 
     public  fatal(message:string){
         RelayLogger.logger.fatal(message);
     }
 }