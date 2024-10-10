
//  import the neccessary part

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')




const app = express()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 8080 

//  schema 
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    mobile: String
}, {
    timestamp: true
})


const userModel = mongoose.model('user', userSchema)

//  read data
app.get("/", async(req, res) => {
    const data = await userModel.find({}) 

  res.json({success: true, data: data})
})

// create data || save data in the mongo db

app.post("/create", async(req,res) => {
    console.log(req.body)
    const data = new userModel(req.body)
    await data.save()
    res.send({success: true, message: 'created successfully'})
})
//  update data 
app.put("/update", async(req,res) =>{
   console.log(req.body)
   const {id, ...rest} = req.body
   console.log(rest)
   await userModel.updateOne({_id: req.body.id}, rest)
   res.send({success: true, message: 'data update successfully'})
})

//  delete data with their id

app.delete("/deleter/:id", async(req,res) => {
    const id = req.params.id
    console.log(id)
    const data = await userModel.deleteOne({_id : id})
{    res.send({success: true, message: 'data deleted successfully', data: data})
}})


//  mongoose connect with the database
mongoose.connect("mongodb://localhost:27017/crudeopration")
.then(()=>{ 
   console.log('databse is connected')
   app.listen(PORT, () => console.log('Server is running'))
}
)
.catch((err) => console.log(err))

