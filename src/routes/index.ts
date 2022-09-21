import { Router } from 'express';
import { helloRoutes } from './hello';

const routes = Router();

routes.use(helloRoutes);

export { routes };
