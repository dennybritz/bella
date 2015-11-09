module.exports = {
  entry: [".ui//js/app.jsx", "./ui/css/main.scss"],
  output: {
    path: __dirname,
    filename: "./ui/public/js/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          optional: ["es7.classProperties"]
        }
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      }
    ]
  }
};