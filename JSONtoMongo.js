'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

mongoose.connect(config.db.uri, {useNewUrlParser: true});

/* Connect to your database using mongoose - remember to keep your key secret*/
//see https://mongoosejs.com/docs/connections.html
//See https://docs.atlas.mongodb.com/driver-connection/

/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
  //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

  Remember that we needed to read in a file like we did in Bootcamp Assignment #1.
 */
let file_read = fs.createReadStream('listings.json');


fs.readFile('listings.json', 'utf8', (err, data) => {
    try {
        file_read.on('data', (data) => {
            //console.log(dataListings);
            let listings = JSON.parse(data);

            listings.entries.forEach(function (element) {
                console.log(element);
                let listing = new Listing(element);
                listing.save((err)=> {
                    if(err) throw err;
                })
            });
        })
    } catch (err) {
        console.log(err);
    }
});


/*
  Check to see if it works: Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
