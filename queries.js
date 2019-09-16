/* Add all the required libraries*/
const fs = require('fs');
const mongoose = require('mongoose');
const Listing = require('./ListingSchema.js');
const config = require('./config');
/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);

mongoose.connect(config.db.uri);


/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = () => {
    /*
      Find the document that contains data corresponding to Library West,
      then log it to the console.
     */
    Listing.find({'name': 'Library West'}, function (err, listing) {
        if (err) throw err;
        console.log(`Finding Library West document: \n ${listing}`);
    });


};
var removeCable = () => {
    /*
      Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
      on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
      and remove this listing from your database and log the document to the console.
     */
    Listing.findOneAndRemove({'code': 'CABL'}, function (err, listing) {
        if (err) throw err;
        console.log(`\nRemoving document with the code 'CABL': `)
        console.log(listing);
    });
};
var updatePhelpsLab = () => {
    /*
      Phelps Lab address is incorrect. Find the listing, update it, and then
      log the updated document to the console.

      Correct Address: 1953 Museum Rd, Gainesville, FL 32603

     */
    Listing.findOneAndUpdate({'name': 'Phelps Laboratory'},
        {'address': '1953 Museum Rd, Gainesville, FL 32603'}, {new: true}, (err, listing) => {
            if (err) throw err;
            console.log(`\nUpdating Phelps Lab address: \n ${listing}`);
        });

};
var retrieveAllListings = () => {
    /*
      Retrieve all listings in the database, and log them to the console.
     */

    Listing.find({}, function (err, listing) {
        console.log(`\nRetrieving all listings in the database:\n`)
        console.log(JSON.stringify(listing, null, 4));
    });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
