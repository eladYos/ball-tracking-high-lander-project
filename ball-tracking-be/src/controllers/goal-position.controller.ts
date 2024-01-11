import express, { Request, Response ,NextFunction } from 'express';
import GoalPositionService from '../services/goal-position.service';
const router = express.Router();

class GoalPositionController {

  public goalPositionService = new GoalPositionService();

  public startNewGameSession = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { ballStartCoordinates } = req.body
      const gameSession = await this.goalPositionService.createGameSession(ballStartCoordinates)
      res.status(200).json({ data: gameSession });
    } catch (error) {
      next(error);
    }
  };

  public checkForWin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { gameSession, ballCoordinates } = req.body
      const winStatus = await this.goalPositionService.checkForWin(ballCoordinates, gameSession);
      res.status(200).json({ data: winStatus });
    } catch (error) {
      next(error);
    }
  }
}

export default GoalPositionController;
