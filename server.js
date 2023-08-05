const express = require('express')
const Vehicle = require('./models/vehicle');
require('./config/connect');

const app = express();
app.use(express.json());
app.listen(3000,()=>console.log('server work'))


const Slot = require('./models/slot');
const Floor = require('./models/floor');
const ParkingLot = require('./models/parkingLot');
const Ticket = require('./models/ticket');

/*******************Vehicle**********************/
app.post('/api/vehicle',(req,res)=>{
    data = req.body;
    vehicle = new Vehicle(data);
    vehicle.save()
        .then(
            (savedVehicle)=>{
                res.send(savedVehicle)
            }
        ).catch(
            (err)=>res.send(err)
        )
})

app.get('/api/vehicle',(req,res)=>{
    Vehicle.find().then(
        (vehicles)=>
            res.send(vehicles)
    ).catch((err)=>{
        (err)=>{res.send(err)}
    })
})

app.delete('/api/vehicle/:id',(req,res)=>{
    id = req.params.id
    Vehicle.findOneAndDelete({id:id}).then(
        (deletev)=>{
            res.send(deletev)
        }
    ).catch(
        (err)=>{
            res.send(err)
        }
    )
})
/************************************************/


