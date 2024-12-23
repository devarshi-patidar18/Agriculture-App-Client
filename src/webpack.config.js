// module.exports = {
//     node: {
//       global: true,
//     },
//   };

const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      global: 'global',
    }),
  ],
};