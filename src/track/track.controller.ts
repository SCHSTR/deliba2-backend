import { Controller, Post, Body } from '@nestjs/common';
import { discordData } from './models/trackModels';
import { TrackService } from './track.service';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  
  @Post('/discord')
  discordTrack(@Body() discordData: {id: String}){
    return this.trackService.discordTrack(discordData)
  }
}
