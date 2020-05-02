var db = require('../database');

class Cities{
    static revtriveAll(callback){
        db.query('SELECT city_name FROM CITIES',function(err,res){
            if(err.error)
                return callback(err);
            return callback(res);
        });
    }

    static insert(city,callback){
        db.query('INSERT INTO cities (city_name) VALUES($1)',[city],function(err,res){
            if(err.error)
                return callback(err);
            return callback(res);
        });
    }
}


module.exports = Cities;