'use strict';

const EventEmitter = require('events');

class CacheableRequest {
  constructor(request, cacheAdapter) {
    if (typeof request !== 'function') {
      throw new TypeError('Parameter `request` must be a function');
    }

    return this.createCacheableRequest(request);
  }

  createCacheableRequest(request) {
    return (opts, cb) => {
      const ee = new EventEmitter();

      const makeRequest = opts => {
        const handler = response => {
          ee.emit('response', response);
          if (typeof cb === 'function') {
            cb(response);
          }
        };

        try {
          const req = request(opts, handler);
          ee.emit('request', req);
        } catch (err) {
          ee.emit('error', new CacheableRequest.RequestError(err));
        }
      };

      process.nextTick(() => makeRequest(opts))

      return ee;
    };
  }
}

CacheableRequest.RequestError = class extends Error {
  constructor(err) {
    super(err.message);
    this.name = 'RequestError';
    Object.assign(this, err);
  }
};

CacheableRequest.CacheError = class extends Error {
  constructor(err) {
    super(err.message);
    this.name = 'CacheError';
    Object.assign(this, err);
  }
};

module.exports = CacheableRequest;
