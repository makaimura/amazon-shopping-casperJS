// Create casper object
var casper = require('casper').create({
    pageSettings: {
        loadImages: false,
        loadPlugins: false
    },
//    logLevel: "debug",
    waitTimeout: 30000,
    verbose: true
});

// Set browser user agent
casper.userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36');

// Print out all the messages in the headless browser context
casper.on('remote.message', function(msg){
    this.echo('remote message cought: ' + msg);
});

// Print out all the sessages in the headless browser context
casper.on('page.error', function(msg, trace){
    this.echo("Page Error: " + msg, "ERROR");
});

// Access to the URL of Ryoma 1865, which is a non-alcohol beer, directly and add to cart.
casper.start("https://www.amazon.co.jp/gp/product/B0054X4H0M/",function(){
    this.click('#add-to-cart-button');
});

// Click "Proceed to checkout" button.
casper.then(function(){
    this.click('#hlb-ptc-btn-native');
});

// Signin with filling Email address and password in the form.
casper.then(function(){
  this.sendKeys("input[name='email']", "YOUR EMAIL ADDRESS");  
});

casper.then(function(){
  this.sendKeys("input[name='password']", "YOUR PASSWORD");
});

casper.then(function(){
  this.click("form[name='signIn'] input#signInSubmit");
});

casper.then(function(){
  this.waitForSelector("input[name='wineNotice']", function(){
    this.click("input[name='wineNotice']");
  });
});

casper.waitForSelector("input[name='placeYourOrder1']", function success(){
  this.click('input[name="placeYourOrder1"]');
});


casper.run();
