import { Request, Response } from 'express';
import { prisma } from '../database/prisma-client';
import status from 'http-status';
import { API_BASE, GAME_NOT_FOUND } from '../utils/constants';
import type { Game } from '../types/game';

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

    async getGame(request: Request, response: Response) {
        const id = request.params.id;

        const game: Game | null = await prisma.game.findUnique({
            where: {
                id: id
            }
        });

        if (game) {
            response
                .status(status.OK)
                .send(game);
        } else {
            response
                .status(status.NOT_FOUND)
                .send(GAME_NOT_FOUND);
        }
    }

    async addGame(request: Request, response: Response) {
        const body: Game = request.body;

        const game: Game = await prisma.game.create({
            data: body
        });

        game.href = `${API_BASE}/games/${game.id}`;

        response
            .status(status.CREATED)
            .location(game.href)
            .send(game);
    }

    async updateGame(request: Request, response: Response) {
        const id = request.params.id;
        const body: Game = request.body;

        const game: Game | null = await prisma.game.findUnique({
            where: {
                id: id
            }
        });

        if (game) {
            await prisma.game.update({
                where: {
                    id: id
                },
                data: body
            })

            if (!body.id) body.id = id;

            response
                .status(status.OK)
                .send(body);
        } else {
            response
                .status(status.NOT_FOUND)
                .send(GAME_NOT_FOUND);
        }
    }

    async deleteGame(request: Request, response: Response) {
        const id = request.params.id;

        await prisma.game.delete({
            where: {
                id: id
            }
        });

        response.sendStatus(status.NO_CONTENT);
    }
}