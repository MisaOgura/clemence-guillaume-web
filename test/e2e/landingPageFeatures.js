describe('CGWeb: Landing page', function() {

  beforeEach(function() {
    browser.get('');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Clémence Guillaume')
  });

  it('has a link to the Home page', function() {
    var homeUrl = 'http://localhost:8080/';
    var linkToHome = element(by.id('home-link'));
    var homeMessage = 'This is home of Clemence Guillaume Website'
    linkToHome.click().then(function() {
      var content = element(by.css('[ng-view]')).getText();
      expect(browser.getCurrentUrl()).toEqual(homeUrl);
      expect(content).toMatch('Home');
      expect(content).toMatch(homeMessage);
    });
  });

  it('has a link to Portfolio page', function() {
    var portfolioUrl = 'http://localhost:8080/portfolio';
    var linkToPortfolio = element(by.id('portfolio-link'));
    linkToPortfolio.click().then(function() {
      var content = element(by.css('[ng-view]')).getText();
      expect(browser.getCurrentUrl()).toEqual(portfolioUrl);
      expect(content).toMatch('Portfolio');
    });
  });

  it('has a link to Contact page', function() {
    var contactUrl = 'http://localhost:8080/contact';
    var linkToContact = element(by.id('contact-link'));
    linkToContact.click().then(function() {
      var content = element(by.css('[ng-view]')).getText();
      expect(browser.getCurrentUrl()).toEqual(contactUrl)
      expect(content).toMatch('Contact');
    });
  });

  it('has a link to About page', function() {
    var aboutUrl = 'http://localhost:8080/about';
    var linkToAbout = element(by.id('about-link'));
    linkToAbout.click().then(function() {
      var content = element(by.css('[ng-view]')).getText();
      expect(browser.getCurrentUrl()).toEqual(aboutUrl)
      expect(content).toMatch('About');
    });
  });
});
