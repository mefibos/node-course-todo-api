const port = 3001;

var express = require ('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require ('./models/todo');
var {User} = require ('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res) => {

    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then(
        (doc) => {
            res.send(doc);
        },
        (e) => {
            res.status(400).send(e);
        }
    );
});

app.listen(port, () => {
    console.log('Started on port ' + port);
});

module.exports = {app};

/*
var newTodo = new Todo({
    text: '    Edit this video2   '//,
    //complete: true,
   // completedAt: 100
})

newTodo.save().then( (doc) => {

    console.log('Saved todo',doc);

}, (e) => {

    console.log ('Unable to save todo');
}

);
*/