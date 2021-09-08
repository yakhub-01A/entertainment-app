const express = require("express");
const router = express.Router();

const video = require("../../models/videoSchema");

router.get("/allvideos", (request, response) => {
    video.find().then((result, error) => {
        console.log(result,error  )
        if(error) {
            return response.status(500).send(error);
        }else return response.json({"data":result});
    });
});

module.exports = router;