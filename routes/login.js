var express = require('express');
var router = express.Router();
var alert=require('alert');
var helper=require('../helper')

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
// products shown in the home page
// let products=[
//   {
//     name:"IPhone 11",
//     category:"Mobile",
//     description:"4 gb ram,64 gb internal,13mp camera",
//     image:"https://i.insider.com/5df10d81fd9db229ba736a77?width=600&format=jpeg&auto=webp",
//     price:"78945"
//   },
//   {
//     name:"IPhone 10",
//     category:"Mobile",
//     description:"8 gb ram,64 gb internal,13mp camera",
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1TaCPM_V6sDgTDF_zagaOUQWl9xzQ4F7k0g&usqp=CAU",
//     price:"58945"
//   },
//   {
//     name:"IPhone 11 plus",
//     category:"Mobile",
//     description:"16 gb ram,64 gb internal,16mp camera",
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGE1PwN90wswxdP5sExMGjUTeFrTm0SGwlLg&usqp=CAU",
//     price:"108945"
//   },
//   {
//     name:"IPhone 7",
//     category:"Mobile",
//     description:"3 gb ram,64 gb internal,13mp camera",
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQic9f2YrjiAEU1nfxKO8YMjqnshPFfDngvSQ&usqp=CAU",
//     price:"78945"
//   },
 
// ]
//login section checks the email and password
router.post('/login',(req,res)=>{
 
  if(req.body.email=="ad@admin" && req.body.password=="admin"){
    helper.allProducts().then((data)=>{
      console.log(data.ops);
      let products=data.ops
      res.render('home',{products})
    })
    
  }else{
    alert("Invalid username or password")
    res.redirect('/')
    

  }
 
})
router.get('/mobile',(req,res)=>{
  helper.mobileProducts().then((data)=>{
    let products=data.ops
    res.render('home',{products})
  })
})
router.get('/cloths',(req,res)=>{
  helper.clothProducts().then((data)=>{
    console.log(data)
    let products=data.ops
    res.render('home',{products})
  })
})
router.get('/electronics',(req,res)=>{
  helper.eProducts().then((data)=>{
    console.log(data)
    let products=data.ops
    res.render('home',{products})
  })
})


module.exports = router;
