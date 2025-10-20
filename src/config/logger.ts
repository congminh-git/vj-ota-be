import { createLogger, format, transports } from 'winston';
import path from 'path';
import * as fs from 'node:fs';

const logFilePath = path.join(__dirname, '../../logs/app.log');
const errorLogFilePath = path.join(__dirname, '../../logs/error.log');

const logDir = path.dirname(logFilePath);
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.printf(
      ({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`,
    ),
  ),
  transports: [
    new transports.File({ filename: errorLogFilePath, level: 'error' }),
    new transports.File({ filename: logFilePath }),
  ],
});
logger.add(
  new transports.Console({
    format: format.combine(format.colorize(), format.simple()),
  }),
);

export default logger;
