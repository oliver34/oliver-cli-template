const path = require('path');
const plugins = require('./plugins');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const resolvePath = (pathRoute, offset = '../') => {
  return path.join(__dirname, offset, pathRoute);
}

const conf = {
  entry: {
    app: resolvePath('src/index.tsx'),
  },
  output: {
    path: resolvePath('dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              useCache: true,
              cacheDirectory: resolvePath('.cache-loader')
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        include: [resolvePath('src')], // 只针对src下面的.scss文件进行编译
        use: ['style-loader', {
          loader: 'cache-loader',
          options: {
            cacheDirectory: resolvePath('.cache-loader'),
          }
        }, 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: resolvePath('tsconfig.json')
      })
    ]
  },
  plugins,
};

module.exports = conf;
