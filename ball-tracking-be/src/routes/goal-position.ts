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
      this.router.post(`${this.path}/new-goal-position`, errorHandler ,this.goalPositionController.getNewRandomGoalPosition);
      this.router.get(`${this.path}/check-for-win`, this.goalPositionController.getNewRandomGoalPosition);
      this.router.get(`${this.path}/:postId`, authMiddleware, this.postsController.getPost);
    }
  }

export default router;
