require('dotenv').config()
import { Injectable } from '@nestjs/common';
import { rastrearEncomendas } from 'correios-brasil'
import * as cheerio from 'cheerio';
import axios from 'axios'

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

  async getKangu(trackCode: string){

    if(trackCode.length != 15) return `Este código não parece ser um código valido para a Kangu, verifique e tente novamente`

    this.query = await axios.get(`https://portal.kangu.com.br/tms/transporte/rastrear/${trackCode}`, {headers: {token: process.env.KANGU_TOKEN}})
    console.log(this.query.data.situacao)
    return {
      trackCode: trackCode,
      data: this.query.data.situacao
    }
  }

  async getUps(trackCode: string){
    return {
      status: 404,
      message: 'Content unavailable right now'
    }
  }


}
