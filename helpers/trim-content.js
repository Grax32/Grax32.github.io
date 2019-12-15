"use strict";

module.exports = function(site, cb) {
  for (const page of site) {
    page.content = page.content ? page.content.trim() : "";
  }

  cb(null, site);
};
