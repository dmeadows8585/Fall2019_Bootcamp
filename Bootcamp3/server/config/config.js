//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

//I had to indicate the database in the string

module.exports = {
  db: {
     uri: 'mongodb+srv://dmeadows:Masterp85!@cluster0-xykor.mongodb.net/test?retryWrites=true&w=majority', //place the URI of your mongo database here.
  },
  openCage: {
    key: '30efba9177c54c0d8200bc4ddeb72f42' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};
