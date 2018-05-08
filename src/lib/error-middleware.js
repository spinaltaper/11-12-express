'use strict';

import logger from './logger';

export default (error,request,response,next)=>{
    logger.log(logger.error,'__ERROR_MIDDLEWARE__');
    logger.log(logger.ERROR,error);

    if (error.status) {
        logger.log(logger.INFO, `Responding with a ${error.status} code and message ${error.message}`);
        return response.sendStatus(error.status);
      }
      //-----------------------------------------------------------------
      // Vinicio - I know that if we are here, it's another type or error
      const errorMessage = error.message.toLowerCase();
    
      if (errorMessage.includes('objectid failed')) {
        logger.log(logger.INFO, 'Responding with a 404 code');
        return response.sendStatus(404);
      }
      if (errorMessage.includes('validation failed')){
          logger.log(logger.INFO,'Responding with a 400 code');
          return response.sendStatus(400);
      }
      if (errorMessage.includes('duplicate key')){
          logger.log(logger.info,'Responding with a 401 code');
        return response.sendStatus(401);
      }
      logger.log(logger.ERROR,'responding with a 500 error code');
      logger.log(logger.ERROR,error);
      return response.sendStatus(500);
}