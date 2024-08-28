const Meditation = require("../../domain/entities/Meditation");
const UseCaseInterface = require("../interfaces/UseCaseInterface");

class GetAdviceByMood extends UseCaseInterface {
  constructor(quotesRepository) {
    super();
    this.quotesRepository = quotesRepository;
  }
  async execute(mood) {
    const quotesData = await this.quotesRepository.GetAdviceByMood(mood);
    return new Meditation({ text: quotesData });
  }
}

module.exports = GetAdviceByMood;
