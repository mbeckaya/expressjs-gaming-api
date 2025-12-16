import { Request, Response } from 'express';
import status from 'http-status';
import { prisma } from '../database/prisma-client';
import type { Game } from '../types/game';
import { parseParamId } from '../utils/parse-param-id';
import { API_BASE } from '../utils/constants';

export default class GameController {
    async getGames(request: Request, response: Response) {
        const games: Game[] = await prisma.game.findMany();

        const gamesWithHref: Game[] = games.map(game => ({
            ...game,
            href: `${API_BASE}/games/${game.id}`,
        }));

        response
            .status(status.OK)
            .send(gamesWithHref);
    }
}