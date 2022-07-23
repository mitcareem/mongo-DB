const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/FruitsDB", {
    useNewUrlParser: true,
});

const fruitsSchema = new mongoose.Schema({
    //pattern of DB//
    name: {
        name: String,
        required: [true, "Please check your data entry, no name specified"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
    },
    review: String,
});

const Fruit = mongoose.model("Fruit", fruitsSchema); //table//collection

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {
        // console.log(fruits);
        mongoose.connection.close();
        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
    }
});
