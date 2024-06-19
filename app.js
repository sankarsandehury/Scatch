const express = require('express')
const app = express();
const cookieParser= require('cookie-parser')
const path=require('path');
const ownerRouter = require('./routes/ownerRoutes');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');

const db =require('./config/mongoose-connnection');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

app.use('/owner',ownerRouter)
app.use('/user',userRouter)
app.use('/product',productRouter)


app.get('/',(req,res)=>{
  res.send('hello')
});

app.listen(3000);