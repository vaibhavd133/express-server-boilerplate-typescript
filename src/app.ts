import express, { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';

const app: Application = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(compression());

export { app };
