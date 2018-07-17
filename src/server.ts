import * as express  from 'express';
import app from './App';

const port:number = 3000;


app.listen(port,() => {
    console.log(`Listening at port http://localhost:${port}/`);
})