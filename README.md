# BACKEND

## Sobre el proyecto

Allivia EMR

### Scripts
```js
mongo
>db.createUser({
  user:"dbgary",
  pwd: "passmongo",
  roles:["dbOwner"]
})

>db.units.updateOne({
  _id: ObjectId("5f0823d0f90b913dde20ac92")
},
{
  $addToSet: {
    pruebas: { _id: ObjectId(), quantity: 150.5, unit: "5f0823dbf90b913dde20ac93" }
  }
})

mongo --username dbgary --password passmongo --authenticationDatabase admin --host localhost --port 27017

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: false,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
}
```
