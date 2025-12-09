const { GoogleGenerativeAI } = require("@google/generative-ai");

if (!process.env.GEMINI_API_KEY) {
    console.error("❌ Erreur : La clé API Gemini n'est pas définie dans les variables d'environnement");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const getModel = () => {
    try {
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
            generationConfig: {
                temperature: 0.7,
                topP: 1,
                topK: 32,
                maxOutputTokens: 4096,
            },
        });
        console.log("\n🎉 Connexion au modèle établie avec succès ! ✅");
        return model;
    } catch (error) {
        console.error("❌ Erreur lors de l'initialisation du modèle Gemini :", error.message);
        throw error;
    }
};

module.exports = { getModel };