module.exports = {
    map: false,
    plugins: {
        'autoprefixer': {},
        'postcss-url': {
            url: 'inline',
            basePath: ['../_assets/']
        },
    }
}