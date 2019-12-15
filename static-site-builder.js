const staticSite = require("static-site");
let options = {
  template: "_templates/default.html"
};

staticSite(options, function(err, stats) {
  console.log("Completed");
});
