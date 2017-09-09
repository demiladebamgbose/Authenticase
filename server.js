/**
 * Created by jolaadeadewale on 09/09/2017.
 */
import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
import bodyParser from 'body-parser';
import http from 'http';


const port = process.env.PORT || 3890;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const webServer = http.createServer(app).listen(port, ()=>{
    console.log('Server running');
});