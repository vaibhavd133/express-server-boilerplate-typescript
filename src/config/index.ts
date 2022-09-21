process.env.NODE_CONFIG_DIR = `${__dirname}/`;

import config from 'config';
import { config as configure } from 'dotenv';
configure();

const configuration = {
  server: {
    port: config.get('server.port')
  },
  database: {
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT, 10),
    type: 'postgres',
    username: process.env.DB_USER,
    database: process.env.DB_NAME
  }
};

export { configuration };
