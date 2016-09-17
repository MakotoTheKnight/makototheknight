import { MakototheknightPage } from './app.po';

describe('makototheknight App', function() {
  let page: MakototheknightPage;

  beforeEach(() => {
    page = new MakototheknightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
