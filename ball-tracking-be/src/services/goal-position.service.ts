import { randomInt, randomUUID } from 'crypto';
import turf from '@turf/turf';
import gameSessionModel from '../models/game-session.model';
import GameSession from '../interfaces/GameSession.interface';

class GameSeesionService {
  public async createGameSession(boalStartingCoordinates: number[]) : Promise<GameSession> {
    const sessionId = randomUUID();
    
    const circle = turf.circle(Object.values(boalStartingCoordinates), 10, { steps: 20, units: 'kilometers' })
    const { coordinates } = circle.geometry;
    const goalCoordinates = coordinates[randomInt(0, coordinates.length)];
    const newGameParameters = await gameSessionModel.create({ sessionId, goalCoordinates });

    return newGameParameters
  }

  public async checkForWin(ballCoordinates: number[], sessionId: string) {
    const gameSession = await gameSessionModel.findOne({ sessionId });
    if(!gameSession) {
      throw new Error('Game Session not found');
    }
    const goalCoordinates = gameSession?.goalCoordinates;
    if(turf.distance(ballCoordinates, goalCoordinates, { units: 'meters' }) <= 10) {
      return { userWon: true}
    }
    return { userWon: false }
  }
}
