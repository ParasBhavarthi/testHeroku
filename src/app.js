"use strict";
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import {validateTokenMiddleWare} from './middlewares/authentification.middleware'

import indexRouter from './routes/index';
import loginRouter from './routes/login';
import registerRouter from './routes/register';
import homeRouter from './routes/home';
import tutorialRouter from './routes/tutorial';
import publicChatRouter from './routes/publicChat';

import {connectDB} from "./models/mongodb";

const app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/home', validateTokenMiddleWare, homeRouter);
app.use('/tutorial', validateTokenMiddleWare, tutorialRouter);
app.use('/public-chat', validateTokenMiddleWare, publicChatRouter);

app.use('/favicon.ico', ignoreFavicon);

function ignoreFavicon(req, res, next) {

    res.status(204).json({nope: true});

}
export default app;
