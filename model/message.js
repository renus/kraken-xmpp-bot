
var KrakenMessage = function(client, event) {

    this.getResponse = function(from, receive) {
        this.receive  = receive;

        switch  (this.receive.toLowerCase()) {

            case "balance":
                client.api('Balance', null, function(error, data) {
                    if(error) {
                        event.emit("result", from, error); return;
                    }

                    event.emit("result", from, data.result.ZEUR);
                });

                break;

            case "orders closed":
            case "orders open":

                var command = this.receive == 'orders open' ? 'OpenOrders' : 'ClosedOrders';
                client.api(command, null, function(error, data) {
                    if(error) {
                        event.emit("result", from, error); return;
                    }

                    var i = 0;
                    var message = "response: ";
                    for (key in data.result.closed) {
                        i++; if (i > 5) {break;}

                        message+= "trxid = " + key + " \n"
                                + "pair = " + data.result.closed[key].descr.pair + " \n"
                                + "type = " + data.result.closed[key].descr.type + " \n"
                                + "status = " + data.result.closed[key].status + " \n"
                                + "volume = " + data.result.closed[key].vol + " \n"
                                + "volume_exec = " + data.result.closed[key].vol_exec + " \n"
                                + "cost = " + data.result.closed[key].cost + " \n"
                                + "price = " + data.result.closed[key].price + " \n"
                                + "\n\n";
                    }

                    event.emit("result", from, message);
                });
                break;
            default :
                event.emit("result", from, "Method not allowed");
                break;
        }

    }
}

module.exports = KrakenMessage;