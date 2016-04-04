var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    context: __dirname,
    entry: {
        'angular2': [
            'rxjs',
            'zone.js',
            'reflect-metadata',
            'angular2/common',
            'angular2/core',
            'angular2/router',
            'angular2/http'
        ],
        'app': [
            './src/app/bootstrap'
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].js.map',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        loaders: [
            { test: /\.html$/,  loader: 'raw' },
            { test: /\.css$/,   loader: 'raw' },
	    { test: /\.scss$/,  loader: 'raw-loader!sass-loader', exclude: /node_modules/ },
            { test: /\.ts$/,    loader: 'ts-loader' },
            { test: /\.jade$/,  loader: 'jade-loader'}
        ]
    },
    resolve: {
        extensions: ['','.ts','.js','.json']
    },
    plugins: [new HtmlWebpackPlugin({ template: 'src/index.html', chunksSortMode: 'none' })],
    devServer: {
        port: 3000,
        host: "localhost",
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
  }
};
