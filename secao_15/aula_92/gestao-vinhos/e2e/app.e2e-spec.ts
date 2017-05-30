import { GestaoVinhosPage } from './app.po';

describe('gestao-vinhos App', () => {
  let page: GestaoVinhosPage;

  beforeEach(() => {
    page = new GestaoVinhosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
