const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/FruitsDB", {
    useNewUrlParser: true,
});

const fruitsSchema = new mongoose.Schema({
    //pattern of DB//
    name: String,
    rating: Number,
    review: String,
});

const Fruit = mongoose.model("Fruit", fruitsSchema); //table//collection

const fruit = new Fruit({
    //creating a document in collection/recordt in table//
    name: "apple",
    rating: 5,
    review: "good",
});

const kiwi = new Fruit({
    name: "kiwi",
    rating: 10,
    review: "good",
});

const banana = new Fruit({
    name: "banana",
    rating: 10,
    review: "awesome",
});

// Fruit.insertMany([kiwi, banana], function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Succesfuly saved all the fruits to FruitsDB");
//     }
// });
// fruit.save();

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {
        // console.log(fruits);
        mongoose.connection.close();
        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        })
    }
});