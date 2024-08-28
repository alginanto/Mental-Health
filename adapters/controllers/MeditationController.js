const GetAdviceByMood = require("../../application/use-cases/GetAdviceByMood");
const GetDailyQuotes = require("../../application/use-cases/GetDailyQuotes");
const GeminiService = require("../../infrastructure/gemini/geminiService");

class MeditationController {
  static async dailyQuote(req, res) {
    try {
      const geminiService = new GeminiService();
      const getDailyQuotes = new GetDailyQuotes(geminiService);
      const quotes = await getDailyQuotes.execute();

      res.json(quotes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async MyMood(req, res) {
    try {
      const { mood } = req.params;
      const geminiService = new GeminiService();
      const getAdviceByMood = new GetAdviceByMood(geminiService);
      const quotes = await getAdviceByMood.execute();

      res.json(quotes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
module.exports = MeditationController;
