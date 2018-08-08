var tr = require('tor-request');

tr.TorControlPort.password = 'giraffe';

tr.renewTorSession(function(err, success) {
    if (err) {
    	console.log("There's an error:" + err);
    	return;
    }

    console.log("Session renewed with success!");
});

tr.request('https://api.ipify.org', function(err, res, body) {
    if (!err && res.statusCode == 200) {
        console.log("Your public (through Tor) IP is: " + body);
    } else {
        console.log("There's an issue " + err);
    }
});