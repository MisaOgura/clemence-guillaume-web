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

  it('has a link to Contact page', function() {
    linkToContact = element(by.id('contact-link'))
    contactUrl = 'http://localhost:8080/contact'
    linkToContact.click().then(function() {
      expect(browser.getCurrentUrl()).toEqual(contactUrl)
    });
  });

  it('has a link to About page', function() {
    linkToAbout = element(by.id('about-link'))
    aboutUrl = 'http://localhost:8080/about'
    linkToAbout.click().then(function() {
      expect(browser.getCurrentUrl()).toEqual(aboutUrl)
    });
  });
});
