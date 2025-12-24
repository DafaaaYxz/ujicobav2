
module.exports = {
    // --- KREDENSIAL (Ganti di sini) ---
    botToken: "8302320785:AAFkPCx_CVU2ZmPtq8bhEKdhHDjWEaqpcF4",
    upstashUrl: "https://growing-firefly-50232.upstash.io",
    upstashToken: "AcQ4AAIncDFlYjI2ZWM2ODhmOGQ0N2YwOTI1Njg5ZDA3ZjRjMDdhMHAxNTAyMzI",

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
