module.exports = {
    map: false,
    plugins:
        process.env.NODE_ENV === 'production'
            ? [
                  require('autoprefixer'),
                  require('tailwindcss'),
                  require('cssnano')({ preset: 'default' }),
                  require('postcss-url')({ url: 'inline', basePath: ['./', './_fonts/'] })
              ]
            : [require('tailwindcss')]
};
