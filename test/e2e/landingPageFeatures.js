describe('CGWeb: Landing page', function() {

  beforeEach(function() {
    browser.get('/');
    var homeUrl = 'http://localhost:8080/';
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Clémence Guillaume')
  });

  it('has a link to the Home page', function() {
    var linkToHome = element(by.id('home-link'));
    var content = element(by.css('[ng-view]')).getText();
    linkToHome.click();
    expect(browser.getCurrentUrl()).toEqual(homeUrl);
    expect(content).toMatch('Home');
  });

  // it('has a link to Portfolio page', function() {
  //   var linkToPortfolio = element(by.id('portfolio-link'));
  //   linkToPortfolio.click().then(function() {
  //     expect(browser.getCurrentUrl()).toEqual(homeUrl);
  //     // expect($('#portfolio.htm')).toBeVisible();
  //   });
  // });
  //
  // it('has a link to Contact page', function() {
  //   var linkToContact = element(by.id('contact-link'));
  //   contactUrl = 'http://localhost:8080/contact';
  //   linkToContact.click().then(function() {
  //     expect(browser.getCurrentUrl()).toEqual(contactUrl)
  //   });
  // });
  //
  // it('has a link to About page', function() {
  //   var linkToAbout = element(by.id('about-link'));
  //   var aboutUrl = 'http://localhost:8080/about';
  //   linkToAbout.click().then(function() {
  //     expect(browser.getCurrentUrl()).toEqual(aboutUrl)
  //   });
  // });
});
