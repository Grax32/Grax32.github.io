"use strict";

module.exports = function(site, cb) {
  const normalizePath = path => path.replace(/\\/g, "/");

  for (const page of site) {
    page.file = normalizePath(page.file);
    page.dest = normalizePath(page.dest);
    page.url = normalizePath(page.url);
  }

  cb(null, site);
};
