'use strict';

import bot from "./bot/bot.js";
import {runMongo} from './config/mongo.js'
import 'dotenv/config.js';


import * as http from "http";
const port = process.env.PORT || 8080;

const init = async () => {
    await runMongo();

    http.createServer(bot.middleware()).listen(port, () => bot.setWebhook('https://viberhelperdhtz.herokuapp.com/'));
}

init();



