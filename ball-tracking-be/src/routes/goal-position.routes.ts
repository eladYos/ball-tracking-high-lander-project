import express from 'express';
import { Router } from 'express';
import GoalPositionController from '../controllers/goal-position.controller';
import { errorHandler } from '../middlewares';

class GoalPositionRoute {
    public path = '/goal-position';
    public router = Router();
    public goalPositionController = new GoalPositionController();
  
    constructor() {
      this.initializeRoutes();
    }
  
    private initializeRoutes() {
      this.router.post(`${this.path}/new-goal-position`, errorHandler ,this.goalPositionController.startNewGameSession);
      this.router.post(`${this.path}/check-for-win`, this.goalPositionController.checkForWin);
    }
  }

export default GoalPositionRoute;
