const { addCategory, addSubCategory, getAllCategory } = require('../controller/category');

const router=require('express').Router()


router.post('/addCategory',addCategory)
router.get('/getAllCategory',getAllCategory)
router.post('/addSubCategory',addSubCategory)


module.exports=router;