const express = require('express');
const { resolve } = require('path');
let cors=require("cors");


const app = express();
const port = 3010;
app.use(cors());
app.use(express.static('static'));

app.get('/cart-total',(req,res)=>{
  let newItemPrice=parseFloat(req.query.newItemPrice);
  let cartTotal=parseFloat(req.query.cartTotal);
  let result = newItemPrice+cartTotal;

  res.send(result.toString());

})

app.get('/membership-discount',(req,res)=>{
  let cartTotal=parseFloat(req.query.cartTotal);
  let isMember=req.query.isMember ==='true';
  let Totalcart;
  
  if (isMember ){
      Totalcart=cartTotal - (cartTotal*10)/100  ;
  }
  else{
    Totalcart=cartTotal;
  }

  res.send(Totalcart.toString())
})

app.get('/calculate-tax',(req,res)=>{
  let cartTotal=parseFloat(req.query.cartTotal)
  let Taxrate=cartTotal*5/100;
  res.send(Taxrate.toString());
})

app.get('/estimate-delivery',(req,res)=>{
  let  shippingMethod =req.query. shippingMethod ;
  let distance=parseFloat(req.query.distance);
  let deliverytime;
  if (shippingMethod=='Standard'){
     deliverytime=distance/50;
  }else{
    deliverytime=distance/100;
  }

  res.send(deliverytime.toString());
})

app.get('/shipping-cost' ,(req,res)=>{
  let weight=parseFloat(req.query.weight);
  let distance=parseFloat(req.query.distance);
  let price=weight * distance * 0.1;
  res.send(price.toString());
})

app.get('/loyalty-points' ,(req,res)=>{
  let purchaseAmount=parseFloat(req.query.purchaseAmount);
  let loyaltypoints = purchaseAmount*2;
  res.send(loyaltypoints.toString());
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
