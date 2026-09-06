const express = require("express");
const router = express.Router();


// All Routes for Users
// Index Route
router.get("/",(req,res)=>{
    res.send("GET for users");
})

// Show users
router.get("/:id",(req,res)=>{
    res.send("GET for user id");
})

// Show users
router.post("/",(req,res)=>{
    res.send("POST for  users");
})

// DELETE users
router.delete("/:id", (req,res)=>{
    res.send("DELETE for user id");
})

module.exports = router;