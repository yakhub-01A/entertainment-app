const express = require("express");
const router = express.Router();

const comic = require("../../models/comicSchema");

router.get("/allcomics", (request, response) => {

    comic.find({}).then((result, error) => {
        console.log(result,error  )
        if(error) {
            return response.status(500).send(error);
        }else return response.json({"data":result});
    });
});

module.exports = router;