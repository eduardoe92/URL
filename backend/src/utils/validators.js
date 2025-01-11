const Joi = require('joi');

exports.validateRegistration = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().email().required(),
        password: Joi.string()
            .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$'))
            .required(),
    });
    return schema.validate(data);
};

exports.validateQrCode = (data) => {
    const schema = Joi.object({
        content: Joi.string().min(1).required(),
    });
    return schema.validate(data);
};
