var Bitbundler = require("bit-bundler");
var jsPlugin = require("bit-loader-js");
var eslintPlugin = require("bit-eslint");
var babelPlugin = require("bit-loader-babel");
var builtins = require("bit-loader-builtins");
var minifyjs = require("bit-bundler-minifyjs");
var extractsm = require("bit-bundler-extractsm");

module.exports = {
  dev: {
    Bitbundler: Bitbundler,
    watch: true,
    files: [{
      src: "src/index.js",
      dest: "dist/index.js"
    }],
    loader: {
      plugins: [
        eslintPlugin(),
        jsPlugin(),
        babelPlugin(),
        builtins()
      ]
    },
    bundler: {
      plugins: [
      ]
    }
  },
  build: {
    Bitbundler: Bitbundler,
    watch: true,
    files: [{
      src: "src/index.js",
      dest: "dist/index.js"
    }],
    loader: {
      plugins: [
        eslintPlugin(),
        jsPlugin(),
        babelPlugin(),
        builtins()
      ]
    },
    bundler: {
      plugins: [
        minifyjs({ banner: buildBannerString() }),
        extractsm()
      ]
    }
  }
};

function buildBannerString() {
  var grunt = require("grunt");
  var package = require("../package");
  return grunt.template.process("/*! <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today() %>. (c) <%= grunt.template.today('yyyy') %> Miguel Castillo. Licensed under MIT */", { data: { pkg: package }});
}
