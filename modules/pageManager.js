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

module.exports = {
  pages: {},
  rewrites: {},
  run: function(app, dirname) {
    app.get("/", function(req, res) {
      return res.status(200).sendFile(dirname + '/templates/home.html');

    });

    var pages = this.pages;
    var rewrites = this.rewrites;

    app.get(['/index.jsp'], function(req, res) {
      var query = req._parsedUrl.query;

      for (var key in rewrites) {
        if (rewrites.hasOwnProperty(key)) {
          if(query == "section="+key) {
            return res.redirect(301, "/index.jsp?section=" + rewrites[key]);
          }
        }
      }

      for (var page in pages) {
        if (pages.hasOwnProperty(page)) {
          if(query == "section="+page) {
            return res.status(200).sendFile(pages[page]);
          }
        }
      }

      return res.status(200).sendFile(dirname + '/templates/404.html');

    });
  },
  setPage: function(key, to) {
    this.pages[key] = to;
  },
  setRewrite: function(key, newKey) {
    this.rewrites[key] = newKey;
  }
}
