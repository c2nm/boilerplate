const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

describe('Test puppeteer', () =>
{
  it('first visual regression test', async () =>
  {
    const page = await browser.newPage();
    await page.goto('https://vielhuber.de');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
