import { model, Schema, Document } from 'mongoose';
import GameSession from '../interfaces/GameSession.interface';

const gameSessionFields: Omit<Record<keyof GameSession, any>, '_id'> = {
  sessionId: {
    type: String,
    required: true,
  },
  goalCoordinates: {
    type: [Number],
    required: false,
    min: 2,
    max: 2,
  },
};

const gameSessionSchema: Schema = new Schema(gameSessionFields);

const gameSessionModel = model<GameSession & Document>('game-session', gameSessionSchema);

export default gameSessionModel;
