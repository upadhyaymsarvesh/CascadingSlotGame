var path = require('path');

module.exports = {
    entry: '.src/main',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module : {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                excllude: /node_moodules/,
                loader: 'babel-loader'
            }
        ]
    }
}