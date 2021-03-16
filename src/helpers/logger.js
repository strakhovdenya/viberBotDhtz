var exports = module.exports = {};

const winston = require('winston');
const toYAML = require('winston-console-formatter');


exports.createLogger = function () {
    const logger = new winston.Logger({
        level: "error" // We recommend using the debug level for development  error
    });

    logger.add(winston.transports.Console, toYAML.config());
    return logger;
}
