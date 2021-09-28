import winston from 'winston'
import toYAML from 'winston-console-formatter';


const createLogger = function () {
    const logger = new winston.Logger({
        level: "error" // We recommend using the debug level for development  error
    });

    logger.add(winston.transports.Console, toYAML.config());
    return logger;
}

export default createLogger;