const express = require("express");
const router = express.Router();

const music = require("../../models/musicsSchema");
const joke = require("../../models/jokesSchema");
const video = require("../../models/videoSchema");
const comic = require("../../models/comicSchema");


router.post("/addmusic",(req, res) => {
    console.log(req.body);
    const newmusic = new music({
        title:req.body.title,
        image:req.body.image,
        music:req.body.music
        
    })
    newmusic.save().then((music,err)=> {
        console.log(music,err)
           res.json({res:"sub"})
    }
     
    )
});
router.post("/addjoke",(req, res) => {
    console.log(req.body);
    const newjoke = new joke({
        number:req.body.number,
        joke:req.body.joke
        
    })
    newjoke.save().then((joke,err)=> {
        console.log(joke,err)
           res.json({res:"sub"})
    }
     
    )
});
router.post("/addvideo",(req, res) => {
    console.log(req.body);
    const newvideo = new video({
        title:req.body.title2,
        video:req.body.video,
    
        
    })
    newvideo.save().then((video,err)=> {
        console.log(video,err)
           res.json({res:"sub"})
    }
     
    )
});
router.post("/addcomic",(req, res) => {
    console.log(req.body);
    const newcomic = new comic({
        title:req.body.title3,
        imageURL:req.body.imageURL,

        
    })
    newcomic.save().then((comic,err)=> {
        console.log(comic,err)
           res.json({res:"sub"})
    }
     
    )
});

module.exports=router;