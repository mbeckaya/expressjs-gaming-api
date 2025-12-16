export interface Game {
    title: string;
    platform: string;
    isPhysical: boolean;
    isDigital: boolean;
    genre: string;
    publisher: string;
    release: number;
    id?: string;
    href?: string;
}