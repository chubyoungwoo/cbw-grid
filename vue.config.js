const path = require('path');

module.exports = {
    runtimeCompiler: true,
    filenameHashing: false,   //true로 하면 파일이름이 hash가 되어 생성된다.
    productionSourceMap: false,  //프로덕션에 소스맵이 필요없는경우 속도가 빠르다.
    pages: {
        main: {
            entry: 'src/index.js',
            //entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    transpileDependencies: [
        'vuetify'
    ],
    outputDir: path.resolve(__dirname, './dist'),
    css: {
        requireModuleExtension: false,
        extract: false,
        loaderOptions: {
            css: {
                modules: {
                    localIdentName: '[name]-[hash]'
                },
                localsConvention: 'camelCaseOnly'
            }
        }
    }

    //assetsDir: ('css', 'img', 'fonts')
};
