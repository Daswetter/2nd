const path = require('path')
const HTMLWebpackPlugin=require('html-webpack-plugin')
const{CleanWebpackPlugin}=require('clean-webpack-plugin')
const { allowedNodeEnvironmentFlags } = require('process')
const CopyWebpackPlugin =require('copy-webpack-plugin')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
// const OptimizeCssAssetsWebpackPlugin =require('optimize-css-assets-webpack-plugin')
// const TerseWebpackPlugin=require('terser-webpack-plugin')

const isDev=process.env.NODE_ENV=='development'
const isProd=!isDev

// const optimization=()=>{
//     const config={
//             splitChunks:{
//             chunks:'all'
//         }
//     }

//     if (isProd) {
//         config.minimizer=[
//             new OptimizeCssAssetsWebpackPlugin(),
//             new TerseWebpackPlugin()
//         ]
//     }
//     return config
// }


module.exports={
    context: path.resolve(__dirname,'src'),
    mode:'development',
    entry:'./index.js',
    output: {
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    resolve:{
        extensions:['.js','.json','.png','.svg']
    },
    // optimization:optimization(),
    devServer:{
        port:4200,
        hot:isDev
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: './pugfiles/main.pug',
            minify:{
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({ 
            patterns: [
                {
                    from: path.resolve(__dirname, './src/Group.svg'),
                    to: path.resolve(__dirname, 'dist/Group.svg') 
                }] 
            }),
            new MiniCssExtractPlugin({
                filename:'[name].css'
            })

    ],
    module:{
        rules: [
            {
                test:/\.css$/,
                use:[{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr:true,
                            reloadAll:true
                        
                        }
                    },
                    'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test:/\.sass|scss$/,
                use:[{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr:isDev,
                            reloadAll:true
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            
        ]
    }
}