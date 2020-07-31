// npm run build --打包
// npm run dev  --启动服务器（会自动修改同步）（修改完毕后再npm run build打包发布）


const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const newLocal = './main.html';
module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
        // publicpath:'...'//打包后所有引入文件前都将加上...
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            // {
            //     test: /\.html$/,
            //     loader: 'html-loader'
            // }
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: newLocal

        })
    ],
    resolve: {
        alias: {
            //配置vue，使用能编译的版本
            //当浏览器解析到 import 'Vue' from 'vue' 时，
            //就回去 node modules里的该路径下寻找相应版本
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        contentBase: './dist',
        inline: true
    }

}