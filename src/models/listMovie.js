const mongoose = require('mongoose');
// const timeZone = require('mongoose-timezone');
const Schema = mongoose.Schema;

const ListMovie = new Schema({
    id: Number,
    description: String,
    title: String,
    poster: 
        { data: Buffer, contentType: String } 
    

    // activo: { type: Boolean, default: true},
    // { type: Date, default:timeStamp }
});
// Schema.plugin(timeZone, { paths: ['tiempoInicio', 'subDocument.subDate'] });
module.exports = mongoose.model('listVistas', ListMovie );
//  'Tarifas', tarifaSchema, 'UserLog', LoginSchema );