"use strict";

var ko = require('knockout');
var Giphy = require('./giphy');

var publicBetaKey = 'dc6zaTOxFJmzC';

var gifs = ko.observableArray([]);

var api = new Giphy({
  apiKey: 'dc6zaTOxFJmzC'
});

api.search("star+wars", function(err, response, body) {
  var result = JSON.parse(body);

  result.data.map(function(gif) {
    gifs.push({ url: gif.images.original.url });
  });
});

ko.applyBindings({
  gifs: gifs
});
