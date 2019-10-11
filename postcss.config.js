module.exports = {
    map: false,
    plugins: [
        require('autoprefixer'),
        require('tailwindcss'),
        require('cssnano')({ preset: 'default' }),
        require('postcss-url')({ url: 'inline', basePath: ['../_assets/', '../_fonts/'] })
    ]
};
