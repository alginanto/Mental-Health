const db = require("../index");

const getAllSongs = async () => {
  const result = await db.query("select * from songs");
};

module.exports = { getAllSongs };
