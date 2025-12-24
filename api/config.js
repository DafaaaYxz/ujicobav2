module.exports = {
    // --- KREDENSIAL (Ganti di sini) ---
    botToken: "YOUR_TELEGRAM_BOT_TOKEN",
    upstashUrl: "https://your-redis-url.upstash.io",
    upstashToken: "YOUR_UPSTASH_TOKEN",

    // --- PENGATURAN BOT ---
    botName: "XdpzQ-AI",
    ownerId: "7341190291", 
    defaultOwnerName: "XdpzQ",
    defaultWa: "085736486023",
    persona: (aiName, ownerName) => `Kamu adalah ${aiName}. Kamu diciptakan dan dikembangkan oleh ${ownerName}. Jika ditanya siapa penciptamu, jawablah ${ownerName}. Kamu asisten cerdas yang sangat membantu.`,
    owner: {
        name: "XdpzQ",
        whatsapp: "085736486023",
        waLink: (num) => `https://wa.me/${num.replace(/[^0-9]/g, '')}`
    }
};
