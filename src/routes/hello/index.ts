import { Router } from 'express';
import { HelloController } from '../../controller/index';

const helloRoutes = Router();

helloRoutes.get('/hello', HelloController.hello);

export { helloRoutes };
