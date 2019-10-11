describe('Test puppeteer', () => {
    beforeAll(async () => {
        await page.goto('https://google.com', { waitUntil: 'networkidle2' });
    }, 3000);

    it('should display "google" text on page', async () => {
        await expect(page).toMatch('google');
    }, 3000);
});
