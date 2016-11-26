var fallback = require("connect-history-api-fallback");
var livereload = require("connect-livereload");

module.exports = {
  "dev": {
    "options": {
      "base": "dist",
      "protocol": "http",
      "port": 8085,
      "hostname": "localhost",
      "keepalive": true,
      "open": "http://localhost:8085/index.html",
      "middleware": function(connect, options, middlewares) {
        middlewares.unshift(fallback({ index: "/index.html" }));
        middlewares.unshift(livereload({ port: 32192 }));
        return middlewares;
      }
    }
  }
};
