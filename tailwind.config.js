const themeColors = {
    transparent: 'transparent',
    black: '#000000',
    white: '#ffffff',
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    tertiary: 'var(--color-tertiary)',
    highlighted: 'var(--color-highlighted)',
    success: 'var(--color-success)',
    error: 'var(--color-error)',
    gray: {
        100: 'var(--color-gray-100)',
        200: 'var(--color-gray-200)',
        300: 'var(--color-gray-300)',
        400: 'var(--color-gray-400)',
        500: 'var(--color-gray-500)',
        600: 'var(--color-gray-600)',
        700: 'var(--color-gray-700)',
        800: 'var(--color-gray-800)',
        900: 'var(--color-gray-900)'
    }
};

module.exports = {
    prefix: '',
    mode: 'jit',
    content: ['./_html/**/*.html', './**/*.php', './_js/**/*.js', './tailwind.safelist.txt'],
    theme: {
        screens: {
            xs: '0px',
            sm: '576px',
            md: '768px',
            lg: '1025px',
            xl: '1460px',
            '2xl': '1921px',
            '3xl': '2560px',
            '4xl': '3840px',
        },
        fontFamily: {
            default: 'var(--font-base)',
            headline: 'var(--font-headline)',
        },
        colors: themeColors,
        fontSize: {
            h1: [
                '3.25rem',
                {
                    letterSpacing: '0rem',
                    lineHeight: '1.25'
                }
            ],
            'h1-mobile': [
                '2rem',
                {
                    letterSpacing: '0rem',
                    lineHeight: '1.25'
                }
            ],
            h2: [
                '3.25rem',
                {
                    letterSpacing: '0rem',
                    lineHeight: '1.25'
                }
            ],
            'h2-mobile': [
                '2rem',
                {
                    letterSpacing: '0rem',
                    lineHeight: '1.25'
                }
            ],
            h3: [
                '2.375rem',
                {
                    letterSpacing: '0rem',
                    lineHeight: '1.25'
                }
            ],
            'h3-mobile': [
                '1.625rem',
                {
                    letterSpacing: '0rem',
                    lineHeight: '1.25'
                }
            ],
            h4: [
                '2.1875rem',
                {
                    letterSpacing: '0rem',
                    lineHeight: '1.25'
                }
            ],
            'h4-mobile': [
                '1.375rem',
                {
                    letterSpacing: '0rem',
                    lineHeight: '1.25'
                }
            ],
            h5: [
                '1.6875rem',
                {
                    letterSpacing: '0rem',
                    lineHeight: '1.25'
                }
            ],
            'h5-mobile': [
                '1.125rem',
                {
                    letterSpacing: '0rem',
                    lineHeight: '1.25'
                }
            ],
            h6: [
                '1.375rem',
                {
                    letterSpacing: '0rem',
                    lineHeight: '1.25'
                }
            ],
            'h6-mobile': [
                '1.125rem',
                {
                    letterSpacing: '0rem',
                    lineHeight: '1.25'
                }
            ],
            body: [
                'var(--font-size-default)',
                {
                    letterSpacing: '0rem',
                    lineHeight: '1.4'
                }
            ],
            'body-mobile': [
                '1rem',
                {
                    letterSpacing: '0rem',
                    lineHeight: '1.4'
                }
            ],
            10: ['0.625rem'],
            11: ['0.6875rem'],
            12: ['0.75rem'],
            13: ['0.8125rem'],
            14: ['0.875rem'],
            15: ['0.9375rem'],
            16: ['1rem'],
            17: ['1.0625rem'],
            18: ['1.125rem'],
            19: ['1.1875rem'],
            20: ['1.25rem'],
            21: ['1.3125rem'],
            22: ['1.375rem'],
            23: ['1.4375rem'],
            24: ['1.5rem'],
            25: ['1.5625rem'],
            26: ['1.625rem'],
            27: ['1.6875rem'],
            28: ['1.75rem'],
            29: ['1.8125rem'],
            30: ['1.875rem'],
            32: ['2rem'],
            36: ['2.25rem'],
            40: ['2.5rem'],
            44: [
                '2.75rem',
                {
                    lineHeight: '1.2'
                }
            ],
            48: [
                '3rem',
                {
                    lineHeight: '1.2'
                }
            ],
            52: [
                '3.25rem',
                {
                    lineHeight: '1.2'
                }
            ],
            button: [
                '1rem',
                {
                    lineHeight: '1.5'
                }
            ]
        },
        borderWidth: {
            DEFAULT: '1px',
            0: '0',
            2: '2px',
            3: '3px',
            4: '4px',
            5: '5px',
            6: '6px',
            7: '7px',
            8: '8px',
            9: '9px',
            10: '10px'
        },
        extend: {
            fontWeight: {
                thin: '100',
                extralight: '200',
                light: '300',
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
                extrabold: '800',
                black: '900'
            }
        }
    },
    variants: {},
    plugins: []
};
