const express=require('express');
const bodyParser=require('body-parser');
const userRouter=require('./routes/users.js');
const productRouter=require('./routes/product.js');
const cors=require('cors');
var app=express();
app.listen(3000);
app.use(express.static(__dirname+"/public"))
app.use(bodyParser.urlencoded({
  extended:false
}));
const session=require('express-session');
app.use(session({
   secret:'128位随机字符',
   resave:false,
   saveUninitialized:true,
   cookie:{
     maxAge:1000*60*60*24,
   }
}));
app.use(cors({
  origin:'http://127.0.0.1:5500',
}))
app.use('/user',userRouter);
app.use('/product',productRouter);