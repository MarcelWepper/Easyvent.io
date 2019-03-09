"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var querystring = require("querystring");
var util = require("./util");
var stdliburl = require("url");

// http, connect, and express compatible URL parser

var Url = function () {
  _createClass(Url, null, [{
    key: "parse",
    value: function parse(req, options) {
      var obj = new this(req, options);

      return {
        host: obj.host(),
        original: obj.original(),
        path: obj.path(),
        query: obj.query(),
        basename: obj.basename(),
        hasHtmlPath: obj.hasHtmlPath(),
        requestedPath: obj.requestedPath(),
        requestedUrl: obj.requestedUrl()
      };
    }
  }]);

  function Url(req, options) {
    _classCallCheck(this, Url);

    if (!req) throw new Error("missing req obj");
    this.req = req;
    this.options = options;
    var url = this.original();
    if (url) {
      this.parsed = stdliburl.parse(url, true); // true for 2nd argument means parse query params
    }
  }

  _createClass(Url, [{
    key: "protocol",
    value: function protocol() {
      if (this.options.options.protocol) return this.options.options.protocol + ":";

      // http://stackoverflow.com/a/10353248
      // https://github.com/expressjs/express/blob/3c54220a3495a7a2cdf580c3289ee37e835c0190/lib/request.js#L301
      var protocol = this.req.connection && this.req.connection.encrypted ? "https" : "http";

      if (this.req.headers && this.req.headers["cf-visitor"]) {
        var cfVisitorMatch = this.req.headers["cf-visitor"].match(/"scheme":"(https|http)"/);
        if (cfVisitorMatch) protocol = cfVisitorMatch[1];
      }

      var xForwardedProto = this.req.headers && this.req.headers["x-forwarded-proto"];
      if (xForwardedProto) {
        xForwardedProto = xForwardedProto.split(",")[0];
        var xForwardedProtoMatch = xForwardedProto.match(/(https|http)/);
        if (xForwardedProtoMatch) protocol = xForwardedProtoMatch[1];
      }

      return protocol + ":";
    }
  }, {
    key: "host",
    value: function host() {
      if (this.options.options.host) return this.options.options.host;
      return this.req.headers && this.req.headers.host;
    }
  }, {
    key: "original",
    value: function original() {
      return this.req.prerenderUrl || this.req.originalUrl || this.req.url;
    }
  }, {
    key: "path",
    value: function path() {
      // in express, this is the same as req.path
      return this.parsed && this.parsed.pathname;
    }

    // returns {a:b, c:d} if query string exists, else null

  }, {
    key: "query",
    value: function query() {
      // in express, req.query will return key/val object
      // parsed.query returns string: a=b&c=d
      return this.parsed && this.parsed.query;
    }

    // if the path is /admin/new.html?a=b&c=d, this returns /new.html

  }, {
    key: "basename",
    value: function basename() {
      var path = this.path();
      return path && path.split("/").pop() || "/";
    }
  }, {
    key: "hasHtmlPath",
    value: function hasHtmlPath() {
      return util.basenameIsHtml(this.basename());
    }
  }, {
    key: "requestedPath",
    value: function requestedPath() {
      if (this.options.options.whitelistQueryParams) {
        var whitelistedQueryParams = this.options.options.whitelistQueryParams(this.req);

        if (whitelistedQueryParams != null) {
          var queryParams = Object.assign({}, this.query());

          Object.keys(queryParams).forEach(function (key) {
            if (!whitelistedQueryParams.includes(key)) {
              delete queryParams[key];
            }
          });

          var whitelistedQueryString = (Object.keys(queryParams).length ? "?" : "") + querystring.stringify(queryParams);

          return this.path() + whitelistedQueryString;
        }
      }

      return this.original();
    }
  }, {
    key: "requestedUrl",
    value: function requestedUrl() {
      return this.protocol() + "//" + this.host() + this.requestedPath();
    }
  }]);

  return Url;
}();

module.exports = Url;