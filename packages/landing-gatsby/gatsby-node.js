/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');


exports.onCreateWebpackConfig = ({ actions, stage, plugins, getConfig }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      fallback: {
        "path": false,
        "fs": false,
        "tls": false,
        "net": false,
        "path": false,
        "zlib": false,
        "http": false,
        "https": false,
        "stream": false,
        "crypto": false,
        "os": false,
        "crypto-browserify": false,
        "url": false,
        "constants": false
      }

    },
  });

  /**
   * MiniCssExtractPlugin css order warning
   * @link https://github.com/gatsbyjs/gatsby/discussions/30169#discussioncomment-621285
   */
  if (stage === 'build-javascript' || stage === 'develop') {
    const config = getConfig();
    config.node = {
      fs: 'empty'
  }
    const miniCss = config.plugins.find(
      (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
    );

    if (miniCss) {
      miniCss.options.ignoreOrder = true;
    }

    actions.replaceWebpackConfig(config);

    actions.setWebpackConfig({
      plugins: [plugins.provide({ process: 'process/browser' })],
    });
  }
};
