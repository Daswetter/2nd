const path = require('path')
const HTMLWebpackPlugin=require('html-webpack-plugin')
const{CleanWebpackPlugin}=require('clean-webpack-plugin')
const { allowedNodeEnvironmentFlags } = require('process')
const CopyWebpackPlugin =require('copy-webpack-plugin')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const webpack = require('webpack');
const { SourceMapDevToolPlugin } = require("webpack");
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
      template:'./pages/room-details/room-details.pug',
      minify:{
        collapseWhitespace: isProd
      }
    }),
      new HTMLWebpackPlugin({
        template:'./pages/ui-kit/cards/cards.pug',
        filename: './form-elements.html',
        collapseWhitespace: false,

      }),
      new HTMLWebpackPlugin({
        template:'./pages/ui-kit/colors-type/colors-type.pug',
        filename: './colors-type.html',
        collapseWhitespace: false,
      }),
      new HTMLWebpackPlugin({
        template:'./pages/ui-kit/cards/cards.pug',
        filename: './cards.html',
        collapseWhitespace: false
      }),
      new HTMLWebpackPlugin({
        template:'./pages/ui-kit/headers-footers/headers-footers.pug',
        filename: './headers-footers.html',
        collapseWhitespace: false,
      }),
      new HTMLWebpackPlugin({
        template:'./pages/landing-page/landing-page.pug',
        filename: './landing-page.html',
        collapseWhitespace: false,
      }),
      new HTMLWebpackPlugin({
        template:'./pages/registration-page/registration-page.pug',
        filename: './registration-page.html',
        collapseWhitespace: false,
      }),
      new HTMLWebpackPlugin({
        template:'./pages/sign-in-page/sign-in-page.pug',
        filename: './sign-in-page.html',
        collapseWhitespace: false,
      }),
      new HTMLWebpackPlugin({
        template:'./pages/search-room-page/search-room-page.pug',
        filename: './search-room-page.html',
        collapseWhitespace: false,
      }),
      new HTMLWebpackPlugin({
        template:'./pages/room-details/room-details.pug',
        filename: './room-details.html',
        collapseWhitespace: false,
      }),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({ 
        patterns: [
        {
          from: path.resolve(__dirname, './src/blocks/logo/logo.svg'),
          to: path.resolve(__dirname, 'dist/logo.svg') 
        },
        {
          from: path.resolve(__dirname, './src/blocks/convenience/insert_emoticon.svg'),
          to: path.resolve(__dirname, 'dist/insert_emoticon.svg') 
        },
        {
          from: path.resolve(__dirname, './src/blocks/convenience/location_city.svg'),
          to: path.resolve(__dirname, 'dist/location_city.svg')
        },
        {
          from: path.resolve(__dirname, './src/blocks/convenience/whatshot.svg'),
          to: path.resolve(__dirname, 'dist/whatshot.svg')
        },
        {
          from: path.resolve(__dirname, './src/project/comment/murad.jpg'),
          to: path.resolve(__dirname, 'dist/murad.jpg')
        },
        {
          from: path.resolve(__dirname, './src/project/comment/patricia.jpg'),
          to: path.resolve(__dirname, 'dist/patricia.jpg')
        },
        {
          from: path.resolve(__dirname, './src/blocks/toxin-logo/toxin-logo.svg'),
          to: path.resolve(__dirname, 'dist/toxin-logo.svg')
        },
        {
          from: path.resolve(__dirname, './src/blocks/socials/twitter.svg'),
          to: path.resolve(__dirname, 'dist/twitter.svg')
        },
        {
          from: path.resolve(__dirname, './src/blocks/socials/facebook.svg'),
          to: path.resolve(__dirname, 'dist/facebook.svg')
        },
        {
          from: path.resolve(__dirname, './src/blocks/socials/instagram.svg'),
          to: path.resolve(__dirname, 'dist/instagram.svg')
        },
        {
          from: path.resolve(__dirname, './src/pages/landing-page/image.jpg'),
          to: path.resolve(__dirname, 'dist/image.jpg')
        },
        {
          from: path.resolve(__dirname, './src/project/room-example/888.jpg'),
          to: path.resolve(__dirname, 'dist/888.jpg')
        },
        {
          from: path.resolve(__dirname, './src/project/room-example/840.jpg'),
          to: path.resolve(__dirname, 'dist/840.jpg')
        },
        {
          from: path.resolve(__dirname, './src/project/room-example/980.jpg'),
          to: path.resolve(__dirname, 'dist/980.jpg')
        },
        {
          from: path.resolve(__dirname, './src/project/room-example/888.jpg'),
          to: path.resolve(__dirname, 'dist/888.jpg')
        },
        {
          from: path.resolve(__dirname, './src/project/room-example/856.jpg'),
          to: path.resolve(__dirname, 'dist/856.jpg')
        },
        {
          from: path.resolve(__dirname, './src/project/room-example/740.jpg'),
          to: path.resolve(__dirname, 'dist/740.jpg')
        },
        {
          from: path.resolve(__dirname, './src/project/room-example/982.jpg'),
          to: path.resolve(__dirname, 'dist/982.jpg')
        },
        {
          from: path.resolve(__dirname, './src/project/room-example/678.jpg'),
          to: path.resolve(__dirname, 'dist/678.jpg')
        },
        {
          from: path.resolve(__dirname, './src/project/room-example/450.jpg'),
          to: path.resolve(__dirname, 'dist/450.jpg')
        },
        {
          from: path.resolve(__dirname, './src/project/room-example/350.jpg'),
          to: path.resolve(__dirname, 'dist/350.jpg')
        },
        {
          from: path.resolve(__dirname, './src/project/room-example/666.jpg'),
          to: path.resolve(__dirname, 'dist/666.jpg')
        },
        {
          from: path.resolve(__dirname, './src/project/room-example/444.jpg'),
          to: path.resolve(__dirname, 'dist/444.jpg')
        },
        {
          from: path.resolve(__dirname, './src/project/room-example/352.jpg'),
          to: path.resolve(__dirname, 'dist/352.jpg')
        },
        {
          from: path.resolve(__dirname, './src/pages/room-details/room_888_1.jpg'),
          to: path.resolve(__dirname, 'dist/room_888_1.jpg')
        },
        {
          from: path.resolve(__dirname, './src/pages/room-details/room_888_2.jpg'),
          to: path.resolve(__dirname, 'dist/room_888_2.jpg')
        },
        {
          from: path.resolve(__dirname, './src/pages/room-details/room_888_3.jpg'),
          to: path.resolve(__dirname, 'dist/room_888_3.jpg')
        }
      ] 
    }),
    new MiniCssExtractPlugin({
      filename:'[name].css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      "window.jQuery":"jquery"
    }),
    new SourceMapDevToolPlugin({
      filename: "[file].map"
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
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ]
  }
}