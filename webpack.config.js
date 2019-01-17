const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/main.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: "/",
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css']
    },
    plugins: [
      new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          Popper: ['popper.js', 'default']
      })
    ],
    module: {
        rules: [{
            test: /\.(scss)$/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                },
                {
                    loader: "postcss-loader",
                    options: {
                        plugins: function () {
                            return [
                                require('autoprefixer')
                            ]
                        }
                    }
                },
                {
                    loader: "sass-loader"
                }
            ]
        }]
    }

};