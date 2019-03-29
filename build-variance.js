const build = require("../../../app/configs/build-variant.json");

const buildVariance = build.variance[build["using-variance"]];

module.exports = buildVariance;
