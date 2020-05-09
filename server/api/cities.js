var express = require('express');
var Cities = require('../models/cities');

var router = express.Router();
const request = require('request-promise');

const API_KEY = "aabf2465728edc6674753d124601cfa0";

var jsdom = require('jsdom');
var $ = require('jquery')(new jsdom.JSDOM().window);

router.get('/',function(req,res){
    Cities.retrieveAll(function(err,cities){
        if(err)
            return res.json(err);
        return res.json(cities);
    });
});

router.post('/',function(req,res){
    console.log("--------------------")
    var city = req.body.city;
    request({
        uri:`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
        json:true
    }).then(function(res){
        Cities.insert(city,function(err,result){
            if(err){
                console.log(err);
                return res.json(err);
            }else{
                return res.json(esult);
            }
           
        });
        
    }).catch(function(err){
        console.log("City Not Found");

        $(".error-label").text('sadasdasdasdasdasdasdas')
        //callback({error: 'Could not reach Openweathermap API.'});
    });
    
});

module.exports = router;