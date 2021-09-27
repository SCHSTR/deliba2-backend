export declare class RastreioService {
    query: any;
    getCorreios(trackCode: string): Promise<"Este código não parece ser um código valido para os Correios, verifique e tente novamente" | "Parece que a encomenda não existe mais ou não foi encontrada no sistema do Correios" | {
        trackCode: string;
        data: any;
    }>;
}
