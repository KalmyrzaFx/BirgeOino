const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data){
    let errors = {};

    data.handle = !isEmpty(data.handle) ? data.handle: '';
    data.favoriteSport = !isEmpty(data.favoriteSport) ? data.favoriteSport: '';
    
    if(!Validator.isLength(data.handle, {min: 2, max: 40})){
        errors.handle = 'Имя должно содержать 2 - 40 символов';
    }
    
    if(Validator.isEmpty(data.handle)){
        errors.handle = 'Требуется имя';
    }
    
    if(Validator.isEmpty(data.favoriteSport)){
        errors.favoriteSport = 'Требуется любимый спорт';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
};