import { Update, Ctx, Start, Help, On, Hears } from 'nestjs-telegraf';

@Update()
export class TelegramUpdate {
  @Start()
  async start(@Ctx() ctx: any) {
    await ctx.reply('Welcome');
  }

  @Help()
  async help(@Ctx() ctx: any) {
    await ctx.reply('Send me a sticker');
  }

  @On('sticker')
  async on(@Ctx() ctx: any) {
    await ctx.reply('👍');
  }

  @Hears('Hi')
  async hears(@Ctx() ctx: any) {
    await ctx.reply('Hey there');
  }
}
