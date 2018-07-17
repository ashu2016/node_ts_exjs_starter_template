import * as log4js from 'log4js';

export class Logger {

    static logger:log4js.Logger;
     /**
      *
      */
     constructor() {
         Logger.logger = log4js.getLogger();      
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
         Logger.logger.info(message);
     }
 
     public   debug(message:string){
         Logger.logger.debug(message);
     }
 
     public  warn(message:string){
         Logger.logger.warn(message);
     }
 
     public  error(message:string){
         Logger.logger.error(message);
     }
 
     public  fatal(message:string){
         Logger.logger.fatal(message);
     }
 }