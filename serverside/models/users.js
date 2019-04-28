const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema
const usersSchema = new mongoose.Schema({
  firstName:  { type: String, required: true},
  lastName:  { type: String, required: true},
  username:  { type: String, required: true},
  //cellPhone:  { type: String, required: true},
  //email:  { type: String, required: true}
  task: {type: String, required: false},
  month: { type: String, required: false },
  day: { type: String, required: false },
  year: { type: String, required: false }
});

//use the blueprint to create the model
// Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model
module.exports = mongoose.model('Users', usersSchema,'users');
//note capital S in the collection name
