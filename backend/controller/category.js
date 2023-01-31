const { default: mongoose } = require('mongoose')
const categoryModel=require('../model/category')
const subCategoryModel=require('../model/subCategory')

exports. addCategory= async(req, res) => {
    const {category}=req.body
    try {
        if(!req.body)return res.status(400).json({message:'all field is mandatory'})
        const valid=await categoryModel.findOne({category})
        if(valid) return res.status(400).json({message:"the category is alredy added"})
        const data=new categoryModel({
            category
        }).save()
        res.status(200).json({message:"category added"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
        
    }


}

exports. getAllCategory=async(req,res)=>{
    try {
        const category=await categoryModel.find().populate('subCategory.subCategoryName')
        console.log(category);
        res.status(200).json(category)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}

exports. addSubCategory=async(req,res)=>{
    console.log(req.body);
    const {subCategory,id}=req.body
    const categoryId=mongoose.Types.ObjectId(id)
    try {
        if(!req.body)return res.status(400).json({message:'all field is mandatory'})
        const data= await new subCategoryModel({
            subCategory
        }).save()
        console.log(data,'subbb');
        const category=await categoryModel.findOneAndUpdate({_id:categoryId},{
            $push:{
                subCategory:[{subCategoryName:data._id}]
            }
        })
        console.log(category);

        
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
        
    }
}