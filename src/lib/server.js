import express from 'express';
import mongoose from 'mongoose';
import logger from './logger';
import noteRoutes from '../route/noteRoutes';
import loggerMiddleware from '../logger-middleware';
import errorMiddleware from '../error-middleware';

const app=express();
let server=null;
app.use(loggerMiddleware);

app,use(noteRoute);

app.all('*',(request,response)=>{
    logger.log(logger.INFO,'Returning a 404 from the catch-all/default route');
    return response.sendStatus(404);
});

app.use(errorMiddleware);

const startServer=()=>{
    return mongoose.connect(process.env.MONGODB_URI).then(()=>{
        server=app.listen(process.env.PORT, ()=>{
        logger.log(logger.INFO,`Server is listening on port ${processs.env.PORT}`);
        })
    });
}
const stopServer=()=>{
    return mongoose.disconnect()
    .then(()=>{
        server.close(() =>{
            logger.log(logger.INFO,'server is off');
        });
    });
};
export {startServer,stopServer};