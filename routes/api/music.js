const express = require("express");
const router = express.Router();

const music = require("../../models/musicsSchema");

router.get("/allmusics", (request, response) => {

    music.find({}).then((result, error) => {
        console.log(result,error  )
        if(error) {
            return response.status(500).send(error);
        }else return response.json({"data":result});
    });
});

module.exports = router;