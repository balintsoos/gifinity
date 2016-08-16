var request = require('request');

function createSearch(apiKey) {
  return function search(tag, cb) {
    var uri = 'https://api.giphy.com/v1/gifs/search';
    var query = '?q=' + tag + '&api_key=' + apiKey;

    var url = uri + query;

    request(url, cb);
  }
}

function Giphy(config) {
  var apiKey = config.apiKey;

  this.search = createSearch(apiKey);
}

module.exports = Giphy;
