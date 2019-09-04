const http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

/* Global variables */
let listingData, server;

let requestHandler = function (request, response) {
    let parsedUrl = url.parse(request.url);

    /*
      The request handler should send listingData in the JSON format as a response if a GET request
      is sent to the '/listings' path.
      Otherwise, it should send a 404 error.
     */

    if (parsedUrl.pathname == '/listings') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write(listingData);
        response.end();
        // send listingData in the JSON format as a response.
    } else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write('Bad gateway error');
        response.end();
    }

};

fs.readFile('listings.json', 'utf8', function (err, data) {
    /*
      This callback function should save the data in the listingData variable,
      then start the server.
     */

    try {
        let file_read = fs.createReadStream('listings.json');
        file_read.on('data', (data) => {
            listingData = data;
        });
    } catch (err) {
        console.log(err);
    }

    //Creates the server and starts it.
    server = http.createServer(requestHandler);
    server.listen(port, () => {
        console.log(`server listening on: http://localhost:${port}`);
    });
});


