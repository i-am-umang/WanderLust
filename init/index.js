require("dotenv").config({ path: "../.env" });

const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listings");

const dbUrl = process.env.ATLASDB_URL;

async function main() {
    await mongoose.connect(dbUrl);
    console.log("connected to DB");

    await initDB();
}

const initDB = async () => {
    await Listing.deleteMany({});

    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "6ab528793aa97cc363e51791"
    }));

    await Listing.insertMany(initData.data);

    console.log("data was initialized");
};

main().catch((err) => {
    console.log(err);
});