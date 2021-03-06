const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
// const path = require('path')
const indexRoutes = require('./routes/index.js')

require('dotenv').config()
const app = express()


//configuraciones
app.set('port', process.env.PORT || 4000);
// mongoose.connect('mongodb+srv://root:toor@cluster0.q692i.mongodb.net/Cluster0?retryWrites=true&w=majority')
  //  mongoose.connect('mongodb://localhost:localhost:27017/mevn-parqueadero')
//   .then(db => console.log('mi base Connected'))
//   .catch(err => console.log(err))
//middlewares 
app.use(morgan('dev'));
app.use(cors());
// app.use((req, res, next)=>{
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, ContentType, Accept");
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
//  });
 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(__dirname + '/public'));

//rutas

app.use('/api', indexRoutes);

app.listen(app.get('port'), ()=>{
    console.log('Server started', app.get('port'));
});