import { Request, Response } from 'express';
import { prisma } from '../database/prisma-client';
import status from 'http-status';
import { GAME_NOT_FOUND } from '../utils/constants';
import { mapGameResponse } from '../utils/game-mapper';
import type { Game } from '../types/game';

export default class GameController {

    async getGames(request: Request, response: Response) {
        const games = await prisma.game.findMany({
            include: {
                platform: true,
                genre: true,
                publisher: true,
            },
        });

        response.status(status.OK).send(games.map(mapGameResponse));
    }

    async getGame(request: Request, response: Response) {
        const id = request.params.id;

        const game = await prisma.game.findUnique({
            where: { id },
            include: {
                platform: true,
                genre: true,
                publisher: true,
            },
        });

        if (!game) {
            return response
                .status(status.NOT_FOUND)
                .send(GAME_NOT_FOUND);
        }

        response.status(status.OK).send(mapGameResponse(game));
    }


    async addGame(request: Request, response: Response) {
        const body: Game = request.body;

        const game = await prisma.game.create({
            data: {
                title: body.title,
                isPhysical: body.isPhysical,
                isDigital: body.isDigital,
                release: body.release,

                platform: {
                    connectOrCreate: {
                        where: { name: body.platform },
                        create: { name: body.platform },
                    },
                },

                genre: {
                    connectOrCreate: {
                        where: { name: body.genre },
                        create: { name: body.genre },
                    },
                },

                publisher: {
                    connectOrCreate: {
                        where: { name: body.publisher },
                        create: { name: body.publisher },
                    },
                },
            },
            include: {
                platform: true,
                genre: true,
                publisher: true,
            },
        });

        response.status(status.CREATED).send(mapGameResponse(game));
    }

    async updateGame(request: Request, response: Response) {
        const id = request.params.id;
        const body = request.body;

        const exists = await prisma.game.findUnique({
            where: { id },
        });

        if (!exists) {
            return response
                .status(status.NOT_FOUND)
                .send(GAME_NOT_FOUND);
        }

        const updatedGame = await prisma.game.update({
            where: { id },
            data: {
                title: body.title,
                isPhysical: body.isPhysical,
                isDigital: body.isDigital,
                release: body.release,

                platform: {
                    connectOrCreate: {
                        where: { name: body.platform },
                        create: { name: body.platform },
                    },
                },

                genre: {
                    connectOrCreate: {
                        where: { name: body.genre },
                        create: { name: body.genre },
                    },
                },

                publisher: {
                    connectOrCreate: {
                        where: { name: body.publisher },
                        create: { name: body.publisher },
                    },
                },
            },
            include: {
                platform: true,
                genre: true,
                publisher: true,
            },
        });

        response.status(status.OK).send(mapGameResponse(updatedGame));
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