const { notify } = require("browser-sync");

module.exports = {
    files: ["public/*.html", "dist/*.css"],
    proxy: "localhost:3000",
    port: 3001,
    reloadDelay: 1000,
    notify: false,
};
