const path = require('path');
const TSLintPlugin = require('tslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    mossm: './src/mossm/mossm.ts',
    exampleApp: './src/exampleApp/index.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'mossm',
    umdNamedDefine: true
  },
  devServer: {
    hot: true,
    watchContentBase: true,
    contentBase: 'dist'
  },
  plugins: [
    new TSLintPlugin({
        files: ['./src/**/*.ts']
    }),
    new CopyWebpackPlugin([{
      from: './src/exampleApp/*.html',
      to: './index.html'
    }])
  ]
};
