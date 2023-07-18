module.exports = {
    prefix: '',
    mode: 'jit',
    content: [
        './_html/**/*.html',
        './*.php',
        './_php/**/*.php',
        './_js/**/*.js',
        './tailwind.safelist.txt'
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
        extend: {},
        screens: {
            xs: '0px', //          0 -  639
            sm: '640px', //      640 -  767
            md: '768px', //      768 - 1023
            lg: '1024px', //    1024 - 1279
            xl: '1280px', //    1280 - 1535
            '2xl': '1536px', // 1536 - 1919
            '3xl': '1920px', // 1920 - 2559
            '4xl': '2560px', // 2560 - 3839
            '5xl': '3840px' //  3840 -    ∞
        }
    },
    variants: {},
    plugins: []
};
