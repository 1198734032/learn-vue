const { resolve } = require("core-js/fn/promise");

module.exports={
    configureWebpack:{
        resolve:{
            alias:{
               'assets':resolve('src/assets'),
               'common':resolve('src/common'),
                'components':resolve('src/components'),
                'network':resolve('src/network'),
                'views':resolve('src/views')

            }
        }
    }
}