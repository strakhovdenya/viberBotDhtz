'use strict';

import bot from "./bot/bot";
import {runMongo} from './config/mongo'
import 'dotenv/config';


const http = require('http');
const port = process.env.PORT || 8080;

const init = async () => {
    await runMongo();

    http.createServer(bot.middleware()).listen(port, () => bot.setWebhook('https://viberhelperdhtz.herokuapp.com/'));
}

init();



