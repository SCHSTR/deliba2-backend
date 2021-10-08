import { TrackService } from './track.service';
export declare class TrackController {
    private readonly trackService;
    constructor(trackService: TrackService);
    discordTrack(discordData: {
        id: String;
    }): Promise<{
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
