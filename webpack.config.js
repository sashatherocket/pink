const path = require('path'),
ExtractTextPlugin = require('extract-text-webpack-plugin');




var config = {
	entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist', 'js'),
    filename: 'index.js',
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?url=false',
          {
            loader: 'postcss-loader',
              options: {
                plugins: [
                  require('postcss-import')(),
									require('postcss-mixins')(),
                  require('postcss-nested')(),
                  require('postcss-simple-vars')(),
									require('cssnano')({
                    preset: 'default',
                  }),
								]
                }
            }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("../css/styles.css")
  ]
};

module.exports = (env, options) => {
  if (options.mode == 'production') {

    config.module = {
      rules: [
      {
        test: /\.css$/,
        use:  ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?url=false',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('postcss-import')(),
									require('postcss-mixins')(),
                  require('postcss-nested')(),
                  require('postcss-simple-vars')(),
									require('cssnano')({
                    preset: 'default',
                  }),
                  ]
                }
            }
          ]
        })

      },
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      }
      ]
};


  }

  return config;
}
