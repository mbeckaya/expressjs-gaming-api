import express from 'express';
import 'dotenv/config';
import { notFound } from './middlewares/not-found';
import GameController from './controllers/game-controller';
import { API_BASE, PORT } from './utils/constants';

const gameController = new GameController();
export const app = express();

app.use(express.json());

app.get(`${API_BASE}/games`, gameController.getGames);

app.use(notFound);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});