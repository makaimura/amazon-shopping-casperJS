## Buy an alcoholic beverage on Amazon with CasperJS
This script performs the same behabiors as you buy something on Amazon with a browser.

## Prerequisites
This script requires PhantomJS and CasperJS. And you need to know about the URL of what you want to buy on Amazon like this: https://www.amazon.co.jp/gp/product/B0054X4H0M/.

### The script runs on
```
$ cat /etc/system-release
Amazon Linux AMI release 2016.3
$ phantomjs --version
2.1.1
$ casperjs --version
1.1.1
```

## What the script do
- Add what you want to buy to the cart.
- Proceed to checkout.
- Sign in to Amazon.co.jp
- Check the checkbox to say you are over 20 years old 
- Place your order. 

## What doesn't(future tasks)
- **Use encrypted credentials**: The script deal with the user credentials for Amazon.co.jp as hard-coded parameter values. Yes, your credentials will be on the *.js file. I know it's terrible...
- **Refer credentials from an external file or something**: Same as above.
- **Throw exceptions**: If something unexpected like a pop-up says "Would you like to try Amazon Prime?" happened, the script doesn't work correctly and throw any error messages. Just hung-up or time-out.

## Author
Alice MAKAIMURA
- twitter: [@arumumu](https://twitter.com/arumumu)
- github: [/makaimura](https://github.com/makaimura)
