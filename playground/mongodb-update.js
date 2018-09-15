//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient,ObjectID} = require ('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => { 
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log ('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate({

        _id : new ObjectID('5b9c6b80260bfd256f177755')
    
    },
    { 
        $inc: {
            age : 5
        }  
        ,
        $set: {
            name:"Mefi Navarro"
        }  
    },
    {
        returnOriginal : false
    }).then((result)=> {

        console.log(result);
    });

    /*
    db.collection('Todos').findOneAndUpdate({

        _id : new ObjectID('5b9c6f444d8179527585f9ee')
    
    },
    { 
        $set: {
            text : 'Walk the dog 2'
        }    
    },
    {
        returnOriginal : false
    }).then((result)=> {

        console.log(result);
    });
*/
    db.close();

} );