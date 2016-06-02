describe('CGWeb: Landing page', function() {

  beforeEach(function() {
    browser.get('/');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Clémence Guillaume')
  });

  it('has a link to Portfolio page', function() {
    linkToPortfolio = element(by.id('portfolio-link'))
    portfolioUrl = 'http://localhost:8080/portfolio'
    linkToPortfolio.click().then(function() {
      expect(browser.getCurrentUrl()).toEqual(portfolioUrl)
    });
  });
});
