const http = require('http');
function httpCall(url, postData) {
    var options = {
        //hostname: 'www.google.com',
        //port: 80,
        //path: '/upload',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData || '')
        }
    };
    try {
        var req = http.request(url, options, (res) => {
            console.log(`STATUS: ${res.statusCode}`);
            console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                try {
                    console.log(`BODY: ${chunk}`);
                } catch { }
            });
            res.on('end', () => {
                try {
                    console.log('No more data in response.');
                }
                catch { }
            });
        });
        req.on('error', (error) => { });
        //req.write(postData);
        req.end();
    } catch { }
}

exports.httpCall = httpCall

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    if (input != '') {
        try {
            httpCall(input, null)
        }
        catch (err) {
            //console.log(err);
        }
    } else process.exit();
});