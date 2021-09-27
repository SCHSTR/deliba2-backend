import { Injectable } from '@nestjs/common';
import { rastrearEncomendas } from 'correios-brasil'


@Injectable()
export class RastreioService {
  query: any
  async getCorreios(trackCode: string){

    if(trackCode.length != 13) return `Este código não parece ser um código valido para os Correios, verifique e tente novamente`

    this.query = await rastrearEncomendas([trackCode])
    const result = this.query.pop()

    if(result.length == 0) return `Parece que a encomenda não existe mais ou não foi encontrada no sistema do Correios`

    return {
      trackCode: trackCode,
      data: result.pop()
    }
  }

}
