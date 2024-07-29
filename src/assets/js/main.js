(function (global) {
  function URLSearchParamsPolyfill(init) {
    var self = this;
    self.dict = {};

    if (typeof init === "string") {
      if (init.charAt(0) === "?") {
        init = init.slice(1);
      }
      init.split("&").forEach(function (pair) {
        var [key, value] = pair.split("=").map(decodeURIComponent);
        self.append(key, value);
      });
    } else if (init instanceof URLSearchParamsPolyfill) {
      init.forEach(function (value, key) {
        self.append(key, value);
      });
    }
  }

  URLSearchParamsPolyfill.prototype.append = function (key, value) {
    if (key in this.dict) {
      this.dict[key].push("" + value);
    } else {
      this.dict[key] = ["" + value];
    }
  };

  URLSearchParamsPolyfill.prototype.delete = function (key) {
    delete this.dict[key];
  };

  URLSearchParamsPolyfill.prototype.get = function (key) {
    return key in this.dict ? this.dict[key][0] : null;
  };

  URLSearchParamsPolyfill.prototype.getAll = function (key) {
    return key in this.dict ? this.dict[key].slice(0) : [];
  };

  URLSearchParamsPolyfill.prototype.has = function (key) {
    return key in this.dict;
  };

  URLSearchParamsPolyfill.prototype.set = function (key, value) {
    this.dict[key] = ["" + value];
  };

  URLSearchParamsPolyfill.prototype.forEach = function (callback, thisArg) {
    var self = this;
    Object.keys(this.dict).forEach(function (key) {
      self.dict[key].forEach(function (value) {
        callback.call(thisArg, value, key, self);
      });
    });
  };

  URLSearchParamsPolyfill.prototype.toString = function () {
    var pairs = [];
    this.forEach(function (value, key) {
      pairs.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
    });
    return pairs.join("&");
  };

  global.URLSearchParams = global.URLSearchParams || URLSearchParamsPolyfill;
})(typeof window !== "undefined" ? window : global);
