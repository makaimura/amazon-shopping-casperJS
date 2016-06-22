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

// Signin with filling Email address...
casper.then(function(){
  this.sendKeys("input[name='email']", "YOUR EMAIL ADDRESS");  
});

// Password...
casper.then(function(){
  this.sendKeys("input[name='password']", "YOUR PASSWORD");
});

// And click the button "Sign In"
casper.then(function(){
  this.click("form[name='signIn'] input#signInSubmit");
});

// You are ordering a non-alcohol beer, but you need to check the checkbox which is a kind of age verification, in case of Japan, you are over 20 years old.
casper.then(function(){
  this.waitForSelector("input[name='wineNotice']", function(){
    this.click("input[name='wineNotice']");
  });
});

// Place your order.
casper.waitForSelector("input[name='placeYourOrder1']", function success(){
  this.click('input[name="placeYourOrder1"]');
});


casper.run();
