module.exports = {
    prefix: '',
    mode: 'jit',
    purge: {
        content: ['./_html/**/*.html', './**/*.php', './tailwind.safelist.txt']
        /* this does not work with tailwind JIT, we use tailwind.safelist.txt instead */
        /*
        options: {
            safelist: ['sticky']
        }
        */
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
