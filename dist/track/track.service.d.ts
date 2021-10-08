export declare class TrackService {
    discordTrack(discordData: any): Promise<{
        authorized: boolean;
        action: string;
        message: string;
        status: number;
    } | {
        authorized: boolean;
        action?: undefined;
        message?: undefined;
        status?: undefined;
    }>;
}
