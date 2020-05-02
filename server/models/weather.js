const request = require('request-promise');

const API_KEY = "aabf2465728edc6674753d124601cfa0";

class Weather{
    static retrieveByCity(city,callback){
        request({
            uri:`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
            json:true
        }).then(function(res){
            callback(res);
        }).catch(function(err){
            console.log(err);
            callback({error: 'Could not reach Openweathermap API.'});
        });
    }
}

module.exports = Weather;