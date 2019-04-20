const path = require('path')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 8080

const METADATA = Object.assign(
  {},
  {
    host: HOST,
    port: PORT,
    PUBLIC: process.env.PUBLIC_DEV || `${HOST}:${PORT}`,
  },
)

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: 'css-loader',
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src'),
    ],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/common/Template/index.html'),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port: METADATA.port,
    host: METADATA.host,
    public: METADATA.PUBLIC,
  },
}

module.exports = config
