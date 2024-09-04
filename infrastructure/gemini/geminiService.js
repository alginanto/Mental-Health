const { GoogleGenerativeAI } = require("@google/generative-ai");
const QuotesRepository = require("../../application/interfaces/QuotesRepository");
const genAI = new GoogleGenerativeAI(process.env.GEMINIAI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

class GeminiService extends QuotesRepository {
  async getDailyQuotes() {
    const promt = `Tell me a 5 jock in json format`;
    const result = await model.generateContent(promt);
    const response = await result.response;
    console.log(response.text());
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
