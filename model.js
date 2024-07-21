const mongoose = require('mongoose')
const Schema= mongoose.Schema

//catagories

const catagories_models= new Schema({
    type:{type:String,default:"Investment"},
    color:{type:String,default:"#FCBE44"},
})

//transaction
const transaction_model=new Schema({
    name:{type:String,default:"Anonymous"},
    type:{type:String,default:"Anonymous"},
    amount:{type:Number},
    date:{type:Date,default:Date.now}
})

const Categories=mongoose.model('categories',catagories_models)
const Transaction=mongoose.model('transaction',transaction_model)

exports.default= Transaction
module.exports={
    Categories,
    Transaction
}