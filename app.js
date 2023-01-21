const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
//connecting to mongoose
mongoose.connect('mongodb+srv://cloudconnect:cBh1BDtyfR8dPIB5	@cluster0.tbojdni.mongodb.net/?retryWrites=true&w=majority')
//Setting the Schema
const fruitSchema = new mongoose.Schema({
  name: String,
  rating : Number,
  review :String
});
//declaring the name of Collection
const Alpha = mongoose.model("Bravo",fruitSchema);
//adding to the Collection
const Charlie = new Alpha ({
  name: "testing the collection name",
  rating: 07,
  review : "whats the name"
});
//saving the new insert
Charlie.save();
