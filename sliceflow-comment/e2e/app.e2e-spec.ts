import { SliceflowCommentPage } from './app.po';

describe('sliceflow-comment App', () => {
  let page: SliceflowCommentPage;

  beforeEach(() => {
    page = new SliceflowCommentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
