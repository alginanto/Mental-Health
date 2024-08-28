const { GoogleGenerativeAI } = require("@google/generative-ai");
const QuotesRepository = require("../../application/interfaces/QuotesRepository");
const genAi = new GoogleGenerativeAI("API_KEY");
const model = genAi.getGenerativeModel({ model: "Gemini-1.5-pro" });

class GeminiService extends QuotesRepository {
  async getDailyQuotes() {
    const promt = `ADD YOUR PROMT`;
    const result = await model.generateContent(promt);
    const response = await result.response;
    const text = response.text();
    return text;
  }

  async getAdviceByMood(mood) {
    const promt = `ADD YOUR PROMT with the ${mood}`;
    const result = await model.generateContent(promt);
    const response = await result.response;
    const text = response.text();
    return text;
  }
}
module.exports = GeminiService;
