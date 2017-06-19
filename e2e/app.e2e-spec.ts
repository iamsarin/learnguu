import { LearnguuPage } from './app.po';

describe('learnguu App', () => {
  let page: LearnguuPage;

  beforeEach(() => {
    page = new LearnguuPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
