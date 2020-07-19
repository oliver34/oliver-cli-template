const path = require('path');

const plugins = require('./plugins');

const conf = {
  entry: {
    app: path.join(__dirname, '../', 'src/index.tsx'),
  },
  output: {
    path: path.join(__dirname, '../', 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.scss$/,
        include: [path.join(__dirname, '../', 'src')],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins,
};

module.exports = conf;
