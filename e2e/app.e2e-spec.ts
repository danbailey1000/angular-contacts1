import { AngularContacts1Page } from './app.po';

describe('angular-contacts1 App', function() {
  let page: AngularContacts1Page;

  beforeEach(() => {
    page = new AngularContacts1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
