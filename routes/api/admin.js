const express = require("express");
const router = express.Router();

const user = require("../../models/UserSchema");

router.get("/allusers", (request, response) => {

    user.find({}).then((result, error) => {
        console.log(result,error  )
        if(error) {
            return response.status(500).send(error);
        }else return response.json({"data":result});
    });
});

module.exports = router;