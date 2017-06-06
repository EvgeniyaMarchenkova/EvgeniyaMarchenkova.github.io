module.exports = {
    entry: './src/index.js',
    watch: true,

    output: {
        path: __dirname + "/dist",
        filename: 'bundle.js',
        publicPath: ''
    },
    devtool:'cheap-inline-module-source-map',
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0' }
        ]
    }
}
