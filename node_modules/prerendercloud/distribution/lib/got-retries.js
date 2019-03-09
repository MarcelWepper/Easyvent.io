"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DELAY_MS = process.env.NODE_ENV === "test" ? 0 : 1000;

function delay(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

var isClientTimeout = function isClientTimeout(err) {
  return err.name === "RequestError" && err.code === "ETIMEDOUT";
};

module.exports = function (got, options, debug) {
  var isRetryableStatusCode = function isRetryableStatusCode(code) {
    return code === 500 || code === 503 || code === 504;
  };

  var isRetryable = function isRetryable(err, retries) {
    return retries <= options.options.retries && (isClientTimeout(err) || err instanceof got.HTTPError && isRetryableStatusCode(err.response.statusCode));
  };

  var GotGetWithRetry = function () {
    function GotGetWithRetry(url, options) {
      _classCallCheck(this, GotGetWithRetry);

      this.url = url;
      this.options = options;
      this.attempts = 0;
    }

    _createClass(GotGetWithRetry, [{
      key: "get",
      value: function get() {
        var _this = this;

        return new Promise(function (resolve, reject) {
          var createGet = function createGet() {
            _this.attempts += 1;
            var inst = got(_this.url, _this.options);
            inst.then(resolve).catch(function (err) {
              // noop because we catch downstream... but if we don't have this, it throws unhandled rejection
            });
            inst.catch(function (err) {
              // https://github.com/sindresorhus/got/pull/360#issuecomment-323501098
              if (isClientTimeout(err)) {
                inst.cancel();
              }

              if (!isRetryable(err, _this.attempts)) {
                return reject(err);
              }

              debug("retrying", {
                url: _this.url,
                statusCode: err.response && err.response.statusCode || "client-timeout",
                attempts: _this.attempts
              });

              var noise = Math.random() * 100;
              var ms = (1 << _this.attempts) * DELAY_MS + noise;

              delay(ms).then(createGet);
            });
          };

          createGet();
        });
      }
    }]);

    return GotGetWithRetry;
  }();

  got.get = function (url, options) {
    return new GotGetWithRetry(url, options).get();
  };
};