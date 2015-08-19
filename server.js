/*
 * Created by MarkehMe / Mark Hughes <mark@markeh.me>
 * Original assets are © 2002-2007 The Coca-Cola Company, Coca-Cola, Coke,
 * V-ego, Launching Pad and Decibel Central are trademarks of The Coca-Cola Company.
 * All other code is licensed under the MIT license.
 *
 * Copyright (c) 2015 Mark Hughes <mark@markeh.me>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

var express = require("express");
var app = express();

var pageManager = require("./modules/pageManager");

// Some basic rewrites
app.use("/", express.static(__dirname + "/www/"));

// Add our pages and route to templates
pageManager.setPage("", __dirname + "/templates/home.html");
pageManager.setPage("home", __dirname + "/templates/home.html");

pageManager.setPage("music-mixer", __dirname + "/templates/page.html");
pageManager.setPage("help", __dirname + "/templates/page.html");
pageManager.setPage("registration", __dirname + "/templates/page.html");
pageManager.setPage("games", __dirname + "/templates/page.html");

// sub page routes
pageManager.setPage("music-mixer-sub", __dirname + "/templates/music-mixer.html");
pageManager.setPage("help-sub", __dirname + "/templates/help.html");
pageManager.setPage("registration-sub", __dirname + "/templates/preregistration.html");
pageManager.setPage("games-sub", __dirname + "/templates/games.html");

// license route
pageManager.setPage("license", __dirname + "/templates/page.html");
pageManager.setPage("license-sub", __dirname + "/templates/license.html");

// Some rewrites
pageManager.setRewrite("create_demo", "music-mixer");

// Rewrite our extras
app.use("/music-mixer-app", express.static(__dirname + "/node_modules/MusicMixer"));

// Run our page manager
pageManager.run(app, __dirname);

// Login Status
app.post(['/login/Login'], function (req, res) {
  res.send('var rCode="FCLOGGEDIN"');
});

app.post(['/ssldocs/login/Login'], function (req, res) {
  res.send('<script>window.location="/";</script>');
});


// SWF Rewrites
app.get('/badge.swf', function(req, res) {
  res.status(200).sendFile(__dirname + '/www/swf/badge.swf');
});
app.get('/avatar_engine.swf', function(req, res) {
  res.status(200).sendFile(__dirname + '/www/swf/avatar_engine.swf');
});
app.get('/404-inner.html', function(req, res) {
  res.status(200).sendFile(__dirname + '/templates/404-inner.html');
});


var fs = require('fs');
var obj = JSON.parse(fs.readFileSync(__dirname + "/config.json", 'utf8'));

// Start the server - it must run on port 80
var server = app.listen(obj.port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Coke Studios Homepage (pre mycoke edition) listening at http://%s:%s', host, port);
  console.log('Note: View this website using a domain or hostname, do not access at file: or localhost or 127.0.0.1 as it wont work!');

});
