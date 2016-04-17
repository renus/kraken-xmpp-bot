var config = require("./config/config.js")
var KrakenMessage = require("./model/message.js")
var events = require('events');
var KrakenClient = require('kraken-api');
var myXmpp =  require('./model/xmpp.js');

var client = new KrakenClient(
    config.kraken.key,
    config.kraken.secret
);

var eventEmitter = new events.EventEmitter();
var message = new KrakenMessage(client, eventEmitter);
var xmpp   = new myXmpp(message, eventEmitter);

xmpp.connect(
    config.xmpp.host,
    config.xmpp.port,
    config.xmpp.login,
    config.xmpp.password
);