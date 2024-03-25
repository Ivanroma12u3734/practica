const mongoose = require ('mongoose');
const url_bd='mongodb://localhost:27017/utma'

mongoose.connect(url_bd)
.then (() => {
    console.log(' conexion exitosa')
})
.catch((err) =>{
    console.log('no jalo tu chingadera ')
})

const esquema_alumnos=new mongoose.Schema(
{
    name:{
        type:String
    },
    apepat: {
     type:String
    },
    apemat:{
        type:String
    },
    telnumber:{
        type:Number
    },
    fechanac:{
        type:Date
    },

})

const alumnos = new mongoose.model('tabla de registro de alumnos',esquema_alumnos)

alumnos.create (
    {
    name:'ivan',
    apepat:'roman',
    apeman:'andrade',
    number:'4493624087',
    fechanac: new Date('2003,09,08'),

    })
