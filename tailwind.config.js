module.exports = {
    prefix: '',
    mode: 'jit',
    content: [
        './_html/**/*.html', './**/*.php', './_js/**/*.js', './tailwind.safelist.txt'
    ],
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
