import hlp from 'hlp';

describe('Test group 1', () => {
    test(
        '{} should be an object',
        () => {
            expect(hlp.isObject({})).toBe(true);
        },
        3000
    );
});
