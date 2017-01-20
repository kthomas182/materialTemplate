import { MaterialTemplatePage } from './app.po';

describe('material-template App', function() {
  let page: MaterialTemplatePage;

  beforeEach(() => {
    page = new MaterialTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
