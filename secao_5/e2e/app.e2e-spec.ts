import { HelloAngularCliPage } from './app.po';

describe('hello-angular-cli App', () => {
  let page: HelloAngularCliPage;

  beforeEach(() => {
    page = new HelloAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
