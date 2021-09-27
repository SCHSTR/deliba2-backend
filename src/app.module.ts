import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RastreioModule } from './rastreio/rastreio.module';

@Module({
  imports: [RastreioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
