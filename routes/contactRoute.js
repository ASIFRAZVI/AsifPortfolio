const express= require('express')

//router object
const router=express.Router();

const contactController=require("../controllers/contactController")



router.get('/contact',(req,res)=>{
    res.render("contact")
  })
router.post('/contact', contactController)

module.exports=router;