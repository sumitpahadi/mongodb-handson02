const {MongoClient} = require('mongodb');

const uri = "mongodb+srv://sumitrawat:sumitrawat123@fooddelivery.4rq8d0f.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
module.exports=client