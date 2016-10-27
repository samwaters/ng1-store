var webpack = require('webpack');
module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.js',
        vendor: ['angular']
    },
    loaders: [
        {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
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
