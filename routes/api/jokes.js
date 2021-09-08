const express = require("express");
const router = express.Router();

const joke = require("../../models/jokesSchema");

router.get("/alljokes", (request, response) => {
    console.log("hji")
    joke.find().then((result, error) => {
        console.log(result,error  )
        if(error) {
            return response.status(500).send(error);
        }else return response.json({"data":result});
    });
});

module.exports = router;