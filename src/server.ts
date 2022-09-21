import { app } from './app';
import { NextFunction, Request, Response } from 'express';
import { appDataSource } from './database/data-source';
import { logger } from '../log/index';
import { configuration } from './config/index';
import { routes } from './routes';

app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  res.status(500).json({ message: 'Internal Server Error' });
});

appDataSource.initialize().then(() => {
  app.listen(configuration.server.port, () => {
    logger.info(`Server is running on port ${configuration.server.port}`);
  });
});
