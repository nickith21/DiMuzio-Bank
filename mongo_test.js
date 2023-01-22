const MongoClient = require('mongodb').MongoClient;
const atlas = "mongodb+srv://Nick:Poopis1@cluster0.7zt6a7k.mongodb.net/?retryWrites=true&w=majority"
 
// connect to mongo
MongoClient.connect(atlas, {useUnifiedTopology: true}, function(err, client) {
  console.log("Connected successfully to server");

    // database Name
    const dbName = 'myproject';
    const db = client.db(dbName);

    // new user
    var name = 'user' + Math.floor(Math.random()*10000);
    var email = name + '@mit.edu';

    // insert into customer table
    var collection = db.collection('customers');
    var doc = {name, email};
    collection.insertOne(doc, {w:1}, function(err, result) {
        console.log('Document insert');
    });

    var customers = db
        .collection('customers')
        .find()
        .toArray(function(err, docs) {
            console.log('Collection:',docs);

            // clean up
            client.close();            
    });    

});
