const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required:[true,"The title is required"],
        min: [5, "The title must be at least 5, got {value}"],
    },
    price: { 
        type: Number,
        required:[true,"The price is required"],
        min:[1, "The minimum price is 1"]
    },
    description: {
        type: String,
        required:[true, "The description is required"],
        min:[10, "The description must be at least 10 character, got {value}"]
    }
},
    { timestamps: true }
)

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;