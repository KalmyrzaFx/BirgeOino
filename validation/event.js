const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data){
    let errors = {};

    data.nameofevent = !isEmpty(data.nameofevent) ? data.nameofevent: '';
    data.typeofsport = !isEmpty(data.typeofsport) ? data.typeofsport: '';
    data.numberofplayer = !isEmpty(data.numberofplayer) ? data.numberofplayer: '';
    
    if(Validator.isEmpty(data.nameofevent)){
        errors.nameofevent = 'Требуется название';
    }
    
    if(Validator.isEmpty(data.typeofsport)){
        errors.typeofsport = 'Требуется вид спорта';
    }
    
    if(!Validator.isNumeric(data.numberofplayer)){
        errors.numberofplayer = 'Должно быть число';
    }
    
    if(Validator.isEmpty(data.numberofplayer)){
        errors.numberofplayer = 'Требуется кол-во игроков';
    }
    else if(data.numberofplayer <= 1){
        errors.numberofplayer = 'Должно быть минимум 2 игрока';
    }
    else if(data.numberofplayer > 100){
        errors.numberofplayer = 'Должно быть меньше 100 игроков';
    }
    
    if(!isEmpty(data.imageURL)){
        if(!Validator.isURL(data.imageURL)){
            errors.imageURL = 'Not a valid URL';
        }
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
};