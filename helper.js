var db=require('./config/connection')
const express=require('express')

module.exports={

    allProducts:()=>{
        return new Promise((resolve,reject)=>{
            db.get().collection('products').insertMany(
                [
                    {
                      name:"IPhone 11",
                      category:"Mobile",
                      description:"4 gb ram,64 gb internal,13mp camera",
                      image:"https://i.insider.com/5df10d81fd9db229ba736a77?width=600&format=jpeg&auto=webp",
                      price:"78945"
                    },
                    {
                        name:"hp 15s",
                        category:"Mobile",
                        description:"16 gb ram,64 gb internal,16mp camera",
                        image:"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3oYjc?ver=a28c",
                        price:"108945"
                      },
                   
                    {
                      name:"IPhone 11 plus",
                      category:"Mobile",
                      description:"16 gb ram,64 gb internal,16mp camera",
                      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGE1PwN90wswxdP5sExMGjUTeFrTm0SGwlLg&usqp=CAU",
                      price:"108945"
                    },
                    {
                        name:"pants",
                        category:"jean",
                        description:"good",
                        image:"https://5.imimg.com/data5/UR/LF/MY-11410518/men-s-stylish-pant-500x500-500x500.jpg",
                        price:"589"
                      },
                    {
                      name:"IPhone 7",
                      category:"Mobile",
                      description:"3 gb ram,64 gb internal,13mp camera",
                      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQic9f2YrjiAEU1nfxKO8YMjqnshPFfDngvSQ&usqp=CAU",
                      price:"78945"
                    },
                    {
                        name:"sareee",
                        category:"saree",
                        description:"good",
                        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwf87CG8IZHxNYV9kzO_OwIutzPIgWo2sfkw&usqp=CAU",
                        price:"7845"
                      },
                      {
                        name:"dell vostro",
                        category:"Mobile",
                        description:"3 gb ram,64 gb internal,13mp camera",
                        image:"https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg",
                        price:"78945"
                      },
                     
                      {
                        name:"shirt",
                        category:"cloth",
                        description:"good",
                        image:"https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg",
                        price:"1089"
                      },
                      {
                        name:"IPhone 10",
                        category:"Mobile",
                        description:"8 gb ram,64 gb internal,13mp camera",
                        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1TaCPM_V6sDgTDF_zagaOUQWl9xzQ4F7k0g&usqp=CAU",
                        price:"58945"
                      },
                      {
                        name:"T-shirt",
                        category:"cloth",
                        description:"good",
                        image:"https://5.imimg.com/data5/EL/RB/WV/SELLER-71787130/sublimation-blank-tshirts-500x500-500x500.jpg",
                        price:"389"
                      },
                      
                      {
                        name:"macbook pro",
                        category:"Mobile",
                        description:"8 gb ram,64 gb internal,13mp camera",
                        image:"https://cdn.mos.cms.futurecdn.net/vEcELHdn998wRTcCzqV5m9.jpg",
                        price:"58945"
                      },
                     
                      
                      {
                        name:"asus zenbook",
                        category:"Mobile",
                        description:"4 gb ram,64 gb internal,13mp camera",
                        image:"https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg",
                        price:"78945"
                      },
                   
                  ]
            ).then((data)=>{
                resolve(data)
            })
        })
    },
    mobileProducts:()=>{
        return new Promise((resolve,reject)=>{
            db.get().collection('products').insertMany(
                [
                    {
                      name:"IPhone 11",
                      category:"Mobile",
                      description:"4 gb ram,64 gb internal,13mp camera",
                      image:"https://i.insider.com/5df10d81fd9db229ba736a77?width=600&format=jpeg&auto=webp",
                      price:"78945"
                    },
                    {
                      name:"IPhone 10",
                      category:"Mobile",
                      description:"8 gb ram,64 gb internal,13mp camera",
                      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1TaCPM_V6sDgTDF_zagaOUQWl9xzQ4F7k0g&usqp=CAU",
                      price:"58945"
                    },
                    {
                      name:"IPhone 11 plus",
                      category:"Mobile",
                      description:"16 gb ram,64 gb internal,16mp camera",
                      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGE1PwN90wswxdP5sExMGjUTeFrTm0SGwlLg&usqp=CAU",
                      price:"108945"
                    },
                    {
                      name:"IPhone 7",
                      category:"Mobile",
                      description:"3 gb ram,64 gb internal,13mp camera",
                      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQic9f2YrjiAEU1nfxKO8YMjqnshPFfDngvSQ&usqp=CAU",
                      price:"78945"
                    },
                   
                  ]
            ).then((data)=>{
                resolve(data)
            })
        })
    },
    clothProducts:()=>{
        return new Promise((resolve,reject)=>{
            db.get().collection('products').insertMany(
                [
                    {
                      name:"sareee",
                      category:"saree",
                      description:"good",
                      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwf87CG8IZHxNYV9kzO_OwIutzPIgWo2sfkw&usqp=CAU",
                      price:"7845"
                    },
                    {
                      name:"pants",
                      category:"jean",
                      description:"good",
                      image:"https://5.imimg.com/data5/UR/LF/MY-11410518/men-s-stylish-pant-500x500-500x500.jpg",
                      price:"589"
                    },
                    {
                      name:"shirt",
                      category:"cloth",
                      description:"good",
                      image:"https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg",
                      price:"1089"
                    },
                    {
                      name:"T-shirt",
                      category:"cloth",
                      description:"good",
                      image:"https://5.imimg.com/data5/EL/RB/WV/SELLER-71787130/sublimation-blank-tshirts-500x500-500x500.jpg",
                      price:"389"
                    },
                   
                  ]
            ).then((data)=>{
                resolve(data)
            })
        })
    },
    eProducts:()=>{
        return new Promise((resolve,reject)=>{
            db.get().collection('products').insertMany(
                [
                    {
                      name:"asus zenbook",
                      category:"Mobile",
                      description:"4 gb ram,64 gb internal,13mp camera",
                      image:"https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg",
                      price:"78945"
                    },
                    {
                      name:"macbook pro",
                      category:"Mobile",
                      description:"8 gb ram,64 gb internal,13mp camera",
                      image:"https://cdn.mos.cms.futurecdn.net/vEcELHdn998wRTcCzqV5m9.jpg",
                      price:"58945"
                    },
                    {
                      name:"hp 15s",
                      category:"Mobile",
                      description:"16 gb ram,64 gb internal,16mp camera",
                      image:"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3oYjc?ver=a28c",
                      price:"108945"
                    },
                    {
                      name:"dell vostro",
                      category:"Mobile",
                      description:"3 gb ram,64 gb internal,13mp camera",
                      image:"https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg",
                      price:"78945"
                    },
                   
                  ]
            ).then((data)=>{
                resolve(data)
            })
        })
    }

}