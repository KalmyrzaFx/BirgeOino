const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCommentInput(data){
    let errors = {};

    data.text = !isEmpty(data.text) ? data.text: '';
    
    if(!Validator.isLength(data.text, {min: 5, max: 300})){
        errors.text = 'Комментарий должен быть 5 - 300 символов';
    }
    
    if(Validator.isEmpty(data.text)){
        errors.text = 'Требуется текст';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
};