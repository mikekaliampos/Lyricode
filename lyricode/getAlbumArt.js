const searchSong = require('./searchSong');
const { checkOptions } = require('./utils');

/**
 * @param {{apiKey: string, title: string, artist: string, optimizeQuery: boolean}} options
 */
module.exports = async function (options) {
  checkOptions(options);
  let results = await searchSong(options);
  if (!results || results.length === 0) return null;
  return results[0].albumArt;
};
