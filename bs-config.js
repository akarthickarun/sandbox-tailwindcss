const { notify } = require("browser-sync");

module.exports = {
    files: ["public/*.html", "dist/*.css"],
    port: 3001,
    reloadDelay: 500,
    notify: false,
    server: ["public", "dist"],
    index: "index.html",
};
