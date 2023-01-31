const mongoose=require('mongoose')

const categorySchema=mongoose.Schema({
    category:{
        type:String,
        required:[true,'name field required'],
    },
    subCategory:[
        {
            subCategoryName:{type:mongoose.Types.ObjectId,
            ref:'subCategory'}
            
        }

    ]
})

module.exports=mongoose.model('category',categorySchema)