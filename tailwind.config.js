module.exports = {
    prefix: '',
    purge: {
        content: ['./_html/**/*.html', './**/*.php'],
        options: {
            safelist: ['sticky']
        }
    },
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
