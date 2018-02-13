"use strict";
module.exports = function (grunt, options) {
  return {
    dist: {
      expand: true,
      src: [
        "*.html",
        "includes/**/*",
        "js/**/*",
        "styles/**/*"
      ],
      dest: "dist",
    },
    distlibs: {
      expand: true,
      flatten: true,
      src: [
        "dist/lucca-ui.js",
        "node_modules/iban/iban.js",
        "node_modules/@cgross/angular-notify/dist/angular-notify.min.js",
        "node_modules/ui-cropper/compile/minified/ui-cropper.js"
      ],
      dest: "demo/libs/",
    },
  };
}