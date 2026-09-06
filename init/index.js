const mongoose = require("mongoose");
const initData= require("./data.js");
const Listing = require("../models/listings");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust2";
async function main(){
    await mongoose.connect(MONGO_URL);
}
main()
    .then(()=>{
        console.log("connected to DB");
    })
    .catch((err)=>{
        console.log(err);
    })

const initDB = async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=> ({...obj, owner: "6a62f8b3f819af1cfe45c618"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();

