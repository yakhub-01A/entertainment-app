const express = require("express");
const router = express.Router();

const feed = require("../../models/feedbackSchema");

router.get("/allfeed", (request, response) => {
    feed.find().then((result, error) => {
        console.log(result,error  )
        if(error) {
            return response.status(500).send(error);
        }else return response.json({"data":result});
    });
});

module.exports = router;