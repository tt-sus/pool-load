import { PoolLoadPage } from './app.po';

describe('pool-load App', () => {
  let page: PoolLoadPage;

  beforeEach(() => {
    page = new PoolLoadPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
