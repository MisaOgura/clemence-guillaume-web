describe('cdweb home page', function() {
  it('has a title', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Clémence Guillaume')
  });
});
