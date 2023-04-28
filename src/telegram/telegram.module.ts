import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { TelegramUpdate } from './telegram.service';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: process.env.TELEGRAM_TOKEN,
    }),
    ConfigModule.forRoot(),
  ],
  providers: [ConfigService, TelegramUpdate],
})
export class TelegramModule {}
