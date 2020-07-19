const path = require('path');

const conf = {
  entry: {
    app: path.join(__dirname, '../../', 'src/index.tsx'),
  },
  output: {
    path: path.join(__dirname, '../../', 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'awsome-typescript-loader',
            options: {},
          },
        ],
      },
    ],
  },
  resolve: {
    extension: ['.ts', '.tsx', '.js', '.jsx'],
  },
};

module.exports = conf;
