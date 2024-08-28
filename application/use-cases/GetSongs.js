const Song = require("../../domain/entities/Song");
const UseCaseInterface = require("../interfaces/UseCaseInterface");

class GetSongs extends UseCaseInterface {
  async execute() {
    const songRows = await getAllSongs();
    return songRows.map(
      (song) =>
        new Song({
          id: song.id,
          title: song.title,
          author: song.author,
          songLink: song.songLink,
        })
    );
  }
}

module.exports = GetSongs;
