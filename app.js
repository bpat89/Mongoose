const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
//connecting to mongoose
mongoose.connect('mongodb+srv://cloudconnect:cBh1BDtyfR8dPIB5	@cluster0.tbojdni.mongodb.net/?retryWrites=true&w=majority')
// Setting the Schema
const fruitSchema = new mongoose.Schema({
  name: String,
  score : Number,
  review :String
});
//declaring the name of Collection
const Fruit = mongoose.model("Fruit",fruitSchema);
//adding to the Collection
const apple = new Fruit ({
  name : "apple",
  score : 9,
  review : "crunchy"
});

const kiwi = new Fruit({
  name : "kiwi",
  score : 10,
  review : "the best fruit"
});
const orange = new Fruit({
  name : "orange",
  score : 9,
  review : "Sour"
});
const banana = new Fruit({
  name : "banana",
  score : 11,
  review : "the best fruit of all"
});
Fruit.insertMany([apple,kiwi,orange,banana], (err)=>{
  if (err) {
    console.log(err);
  } else {
    console.log("all fruits successfully saved to the fruits DB");
  }
})
