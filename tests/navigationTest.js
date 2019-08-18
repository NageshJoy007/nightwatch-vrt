'use strict'

module.exports = {
    
  '@tags':['navigationTest','all'],

    'Navigation to Google' : function (client) {
      client
        .url('https://www.google.com')
        .waitForElementVisible('body', 1000)
        .assert.title('Google')
        .assert.screenshotIdenticalToBaseline('body', 'homepage' ,{threshold: 0.05})
        .end();
    }
  };