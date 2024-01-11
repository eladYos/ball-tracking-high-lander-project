import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import * as middlewares from './middlewares';
import api from './routes';
import MessageResponse from './interfaces/MessageResponse.interface';
import GoalPositionRoute from './routes/goal-position.routes';

require('dotenv').config();

const goalPositionRoute = new GoalPositionRoute();
const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());


app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
app.use('/', goalPositionRoute.router);

export default app;
