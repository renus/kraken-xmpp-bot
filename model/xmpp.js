var xmpp = require('simple-xmpp');

var MyXmpp = function(message, event) {

    this.connect = function(host, port, login, password) {
        xmpp.connect({
            jid                 : login,
            password            : password,
            host                : host,
            port                : port
        });
    };

    this.send = function(to, content) {
        xmpp.send(to, content);
    }

    xmpp.on('online', function(data) {
        console.log('Connected with JID: ' + data.jid.user);
    });

    xmpp.on('chat', function(from, content) {
        message.getResponse(from, content);
    });

    xmpp.on('error', function(err) {
        console.error(err);
    });

    xmpp.on('subscribe', function(from) {
        xmpp.acceptSubscription(from);
    });

    event.on("result", function(from, content) {
        xmpp.send(from, content);
    })

};

module.exports = MyXmpp;