import { AuthService } from './auth.service';
import { discordUser, appUser } from './dto/discordUser.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registerFromDiscord(discordUser: discordUser): Promise<{
        message: string;
        data: import(".prisma/client").User;
        status?: undefined;
    } | {
        status: number;
        message: string;
        data: any;
    }>;
    registerFromApp(appUser: appUser): Promise<{
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
