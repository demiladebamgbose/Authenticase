/**
 * Created by jolaadeadewale on 09/09/2017.
 */
import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
dotenv.config();
import bodyParser from 'body-parser';
import http from 'http';
import database from './server/config/database';
import routes from './server/route';


const port = process.env.PORT || 3890;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())
const db = database();
routes(app);


const webServer = http.createServer(app).listen(port, ()=>{
    console.log('Server running');
});