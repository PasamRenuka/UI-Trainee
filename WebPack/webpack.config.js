const path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


module.exports = {
    mode: 'production',
    entry: {
            bundle: path.resolve(__dirname,'src/index.js')
            },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: "source-map",
    devServer:{
        static:{
            directory: path.resolve(__dirname,'dist')
        },
        port: 3000,
        open: true,
        hot:true,
        compress: true,
        historyApiFallback:true,
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:[
                    'style-loader','css-loader','sass-loader'
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env',"@babel/preset-react"],
                    }
                }
            },
            {
                test: /\.(png|svg|jpeg|jpg|gif)$/i,
                type:'asset/resource',
                loader: 'file-loader',
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/index.html',
        }),
        // new BundleAnalyzerPlugin(),
    ],
    resolve: {
        alias: {
          icons: path.resolve(__dirname, 'src/icons'), // Adjust the path accordingly
        },
      },
}
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
         
//         },
//       },
//       {
//         test: /\.(png|jpg|jpeg|gif)$/i,
//         use: [
//           {
//             loader: 'file-loader',
            
//           },
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//     }),
//   ],
// };
