import hlp from 'hlp';

describe('Test group 1', () =>
{
  test('{} should be an object', () =>
  {
    expect( hlp.isObject({}) ).toBe(true);
  }, 3000);
});

describe('Test puppeteer', () =>
{
  beforeAll(async () =>
  {
    await page.goto('https://google.com', { waitUntil: 'networkidle2' })
  }, 3000);

  it('should display "google" text on page', async () =>
  {
    await expect(page).toMatch('google')
  }, 3000);
});

