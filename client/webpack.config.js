module.exports = {
    resolve: {
        extensions: [".js", ".jsx"]
    },

    module: {
        rules : [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }

            }, 
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }, 
            {
            
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                
            }
        ]
    }
}