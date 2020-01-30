const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'client', 'app.jsx'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', options: { presets: ['@babel/preset-env', '@babel/preset-react'] } }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    }
};
