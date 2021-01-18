module.exports = {
    prefix: '',
    purge: ['./_html/**/*.html', './**/*.php'],
    darkMode: false,
    theme: {
        fontFamily: {
            custom: ['"Open Sans"', 'sans-serif']
        },
        colors: {
            black: 'var(--color-black)',
            white: 'var(--color-white)',
            red: 'var(--color-red)'
        },
        extend: {}
    },
    variants: {},
    plugins: []
};
