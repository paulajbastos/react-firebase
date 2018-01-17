import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
  entry: [path.join(__dirname, '../', 'src', 'app')],
  output: {
    path: path.join(__dirname, '../', 'dist'),
    filename: 'bundle.js',
    publicPath: './',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.sass', '.css'],
  },
  module: {
    loaders: [
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1,
                minimize: process.env.NODE_ENV === 'production',
              },
            },
            { loader: 'postcss-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } },
          ],
        }),
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /src\/styles$/],
        query: {
          presets: ['env', 'react', 'stage-1'],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
    }),
    new ExtractTextPlugin('bundle.css'),
  ],
};

export default { ...config };
