const path = require('path');
const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/public');

module.exports = {
    entry: `${SRC_DIR}/index.jsx`,
    output: {
        filename: 'bundle.js',
        path: DIST_DIR
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
};
    // module: {
    //     loaders: [
    //         {
    //             test: /\.jsx?/,
    //             include: SRC_DIR,
    //             loader: 'babel-loader',
    //             query: {
    //                 presets: ['react', 'es2015']
    //             }
    //         }
    //     ]
    // }