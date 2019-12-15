"use strict";
/*
  this helper depends on normalize-paths.js to run in a windows environment
*/

module.exports = function(site, cb) {
  for (const page of site) {
    if (page.permalink) {
      const dest = page.dest;
      const root = dest.substr(0, dest.indexOf(page.url));

      page.url = page.permalink;
      page.dest = root + page.permalink;

      if (page.permalink.indexOf('.') === -1) {
        page.dest += '.html';
      }
    }
  }

  cb(null, site);
};
