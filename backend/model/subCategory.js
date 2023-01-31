const mongoose = require('mongoose')

const SubCategorySchema = mongoose.Schema({
    subCategory: {
        type: String,
        required: [true, 'name field required']
    }
})

module.exports = mongoose.model('subCategory', SubCategorySchema)