var webpack = require('webpack');
module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.js',
        vendor: ['angular', 'angular-ui-bootstrap']
    },
    loaders: [
        {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        },
        {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        },
        {
            test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
            loader: "file-loader"
        }
    ],
    output: {
        filename: 'app.bundle.js',
        path: __dirname + '/js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js')
    ]
};
