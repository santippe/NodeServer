const http = require('https');
function httpCall(url, method, postData) {
    var options = {
        //hostname: 'www.google.com',
        //port: 80,
        //path: '/upload',
        method: method,
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
                console.log(`BODY: ${chunk}`);
            });
            res.on('end', () => {
                console.log('No more data in response.');
            });
        });
        req.on('error', (error) => {
            console.log(error);
        });
        //req.write(postData);
        req.end();
    } catch (error) {
        //console.log(error)
    }
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
            httpCall(input, 'GET', null)
        }
        catch (err) {
            //console.log(err);
        }
    } else process.exit();
});