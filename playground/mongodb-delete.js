//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient,ObjectID} = require ('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => { 
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log ('Connected to MongoDB server');

/*     db.collection('Users').find({
        name: 'Eliab'
    }).toArray().then((docs)=>{

        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    },(err) => {

        console.log('Unable to fetch todos',err);
    }
        

    ); */
/*
    db.collection('Todos').deleteMany({name: 'lunch'}).then ((result)=> {
            console.log(result);
        }
    );
*/
    db.collection('Todos').findOneAndDelete({completed:false}).then (
    (result) => { console.log(result);
    
                 } 

    );
    db.close();

} );