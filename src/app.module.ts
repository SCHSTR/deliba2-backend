import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RastreioModule } from './rastreio/rastreio.module';
import { AuthModule } from './auth/auth.module';
import { TrackModule } from './track/track.module';

@Module({
  imports: [RastreioModule, AuthModule, TrackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
