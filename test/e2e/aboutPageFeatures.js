describe('CGWeb: About page', function() {

  beforeEach(function() {
    browser.get('/about');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('CG About')
  });

  it('has a link to the Home page', function() {
    linkToHome = element(by.id('home-link'));
    homeUrl = 'http://localhost:8080/'
    linkToHome.click().then(function() {
      expect(browser.getCurrentUrl()).toEqual(homeUrl)
    });
  });
});
