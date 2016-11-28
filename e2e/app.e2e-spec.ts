import { CursoangularPage } from './app.po';

describe('cursoangular App', function() {
  let page: CursoangularPage;

  beforeEach(() => {
    page = new CursoangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
