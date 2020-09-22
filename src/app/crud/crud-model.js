const mongoose = require('mongoose');

const crudSchema = mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String
    }
});

const crudModel = mongoose.model('crud', crudSchema);

module.exports = crudModel;