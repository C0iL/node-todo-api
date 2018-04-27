// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
      return console.log('Unable to connec to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
      console.log(result);
    });

    db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
      console.log(result);
    });

    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
      console.log(result);
    });



    // db.close();
});
