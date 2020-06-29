const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#FFFFFF',
                                      '@icon-color': 'inherit'},
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};