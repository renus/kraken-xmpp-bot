# kraken-xmpp-bot

it's a Node JS XMPP BOT connected to your Kraken Account with your API KEY informations and can give 
details on your orders or your Kraken Balance.

## installation
You must install dependencies and configure your application with the xmpp account you want to use  (gmail or other) and 
kraken api key and private.

### dependencies 
<pre>
npm install 
</pre>

###configuration

create the file config/config.js from config/config.sample.js and complete it 

```js

var config = {};

config.kraken = {
    "key"   : "",
    "secret": ""
};

config.xmpp = {
    "host"    : "", //"talk.google.com" if you use gmail
    "port"    : 0000, // 5222 if you use gmail
    "login"   : "",
    "password": ""
};

module.exports = config;

```

## usage 

### start application 

<pre>
node app.js
</pre>

### usage 

in order to use the application, you must contact your configured xmpp account and send a recognized command :
  
#### command list:
  
* balance : 
display EUR balance

* orders closed: 
display the last 5 finished or cancel orders

* orders open: 
display the last 5 orders in progress 
