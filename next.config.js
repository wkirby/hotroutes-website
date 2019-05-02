const withSass = require("@zeit/next-sass");
const repo = "hotroutes-website";

module.exports = withSass({
  webpack: function(config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "js-yaml-loader"
    });
    return config;
  }
});
