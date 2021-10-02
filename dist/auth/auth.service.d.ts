export declare class AuthService {
    registerFromDiscord(discordData: any): Promise<{
        message: string;
        data: import(".prisma/client").User;
        status?: undefined;
    } | {
        status: number;
        message: string;
        data: any;
    }>;
    registerFromApp(appUser: any): Promise<{
        message: string;
        data: {
            email: any;
            name: any;
            surname: any;
            bday: any;
            accountType: any;
        };
    }>;
}
