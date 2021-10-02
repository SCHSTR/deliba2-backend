import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RastreioModule } from './rastreio/rastreio.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [RastreioModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
