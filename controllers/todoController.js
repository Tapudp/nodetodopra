var bodyParser = require('body-parser');

var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
//this is the middleware that we want to run in this post request
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {

app.get('/todo', (req, res) => {
    res.render('todo', {todos: data});
});

app.post('/todo', urlencodedParser, function(req, res) {
    data.push(req.body);
    res.json(data);
});

app.delete('/todo/:item', (req, res) => {
    data = data.filter(function(todo){
        return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);
});

};