export function mapGameResponse(game: any) {
    return {
        id: game.id,
        title: game.title,
        platform: game.platform.name,
        genre: game.genre.name,
        publisher: game.publisher.name,
        isPhysical: game.isPhysical,
        isDigital: game.isDigital,
        release: game.release,
    };
}