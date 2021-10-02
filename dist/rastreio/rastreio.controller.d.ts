import { RastreioService } from './rastreio.service';
export declare class RastreioController {
    private readonly rastreioService;
    constructor(rastreioService: RastreioService);
    getCorreios(trackCode: string): Promise<"Este código não parece ser um código valido para os Correios, verifique e tente novamente" | "Parece que a encomenda não existe mais ou não foi encontrada no sistema do Correios" | {
        trackCode: string;
        data: any;
    }>;
    getKangu(trackCode: string): Promise<"Este código não parece ser um código valido para a Kangu, verifique e tente novamente" | {
        trackCode: string;
        data: any;
    }>;
    getUps(trackCode: string): Promise<{
        status: number;
        message: string;
    }>;
}
