import { StutterwarpPage } from './app.po';

describe('stutterwarp App', () => {
  let page: StutterwarpPage;

  beforeEach(() => {
    page = new StutterwarpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
