import express from 'express';
import 'dotenv/config';
import { notFound } from './middlewares/not-found';
import { validateGameBody } from './middlewares/game-middleware';
import { API_BASE, PORT } from './utils/constants';
import GameController from './controllers/game-controller';

const gameController = new GameController();
const app = express();

app.use(express.json());

app.get(`${API_BASE}/games`, gameController.getGames);

app.get(`${API_BASE}/games/:id`, gameController.getGame);

app.post(`${API_BASE}/games`, validateGameBody, gameController.addGame);

app.put(`${API_BASE}/games/:id`, validateGameBody, gameController.updateGame);

app.delete(`${API_BASE}/games/:id`, gameController.deleteGame);

app.use(notFound);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});