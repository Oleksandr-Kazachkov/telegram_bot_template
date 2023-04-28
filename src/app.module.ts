import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [ConfigModule.forRoot(), TelegramModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
