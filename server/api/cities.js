const express = require('express');
var Cities = require('../models/cities');

var router = express.Router();

router.get('/',function(req,res){
    Cities.revtriveAll(function(err,cities){
        if(err)
            return res.json(err);
        return res.json(cities);
    });
});

router.post('/',function(req,res){
    cities.insert(function(err,result){
        if(err)
            return res.json(err);
        return res.json(result);
    });
});

module.exports = router;