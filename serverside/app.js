const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
// use the following code on any request that matches the specified mount path
const mongoose = require('mongoose');
const Users = require('./models/users');
const derek = require('./models/users');
app.use((req, res, next) => {
  console.log('This line is always called');
  res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); //allowable methods
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  next();
});
app.get('/users', (req, res, next) => {
//call mongoose method find (MongoDB db.Students.find())
  Users.find()
  //if data is returned, send data as a response
    .then(data => res.status(200).json(data))
    //if error, send internal server error
    .catch(err => {
      console.log('Error: ${err}');
      res.status(500).json(err);
    });
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// serve incoming post requests to /students
app.post('/users', (req, res, next) => {
  // create a new user variable and save request’s fields
  const user = new Users({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    task: req.body.task,
    month: req.body.month,
    day: req.body.month,
    year: req.body.year
  });
  //send the document to the database
  user.save()
  //in case of success
    .then(() => { console.log('Success');})
    //if error
    .catch(err => {console.log('Error:' + err);});
});

//:id is a dynamic parameter that will be extracted from the URL
app.delete("/users/:id", (req, res, next) => {
  Users.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");
  });
});

// serve incoming put requests to /users
app.put('/users/:id', (req, res, next) => {
  console.log("id: " + req.params.id)
  // check that the parameter id is valid
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    //find a document and set new first and last names
    Users.findOneAndUpdate({_id: req.params.id},
      {$set:{firstName : req.body.firstName,
          lastName : req.body.lastName,
          username : req.body.username,
          task : req.body.task }},{new:true})
      .then((user) => {
        if (user) { //what was updated
          console.log(user);
        } else {
          console.log("no data exist for this id");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log("please provide correct id");
  }

});

mongoose.connect('mongodb+srv://derek:derek1989@cluster0-ods91.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
  .then(() => { console.log("connected to MondoDB Atlas"); })
  .catch(() => { console.log("error connecting"); });

//to use this middleware in other parts of the application
module.exports=app;

