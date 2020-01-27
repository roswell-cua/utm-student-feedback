const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'client', 'app.jsx'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { test: /\.jsx?$/, loader: 'babel-loader', options: { presets: ['@babel/preset-react'] } }
        ]
    }
};
