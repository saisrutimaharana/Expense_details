const model = require('../modules/model')



async function create_Catagories(req,res){
    const Create = new model.Categories({
        type:"Savings",
        color:"#1F3B5C"
    })

    await Create.save(function(err){
        if(!err)return res.json(Create)
        return res.status(400).json({message:`error while creating ${err}`})
    })
}
async function get_Catagories( req,res){
    let data = await model.Categories.find({})
    let filter=await data.map(v=>Object.assign({},{type:v.type,color:v.color}))
    return res.json(filter)

}

async function create_transaction(req,res){
    if(!req.body)return res.status(400).json("Post HTTP Data not Provided")
    let {name,type,amount}=req.body

    const create = await new model.Transaction({
        name,
        type,
        amount,
        data:new DataTransfer()
    })
    create.save(function(err){
        if(!err)return res.json(create)
        return res.status(400).json({message:`Erro ${err}`})  
    })
}



async function get_transaction(req,res){
    let data = await model.Transaction.find({})
    return res.json(data)
}


async function delete_transaction(req,res){
    if(!req.body)res.status(400).json({message:"req body not found"})
    await model.Transaction.deleteOne(req.body,function(err){
if(!err)return res.json("record deleteed")
}).clone().catch(function(err){res.json("error while deleting ")})
}
async function get_Labels(req,res){
    model.Transaction.aggregate([
        {
            $lookup:{
                form:"categories",
                localField:"type",
                foreignField:"type",
                as:"categories_info"
            }
        },
        {
            $unwind:"$categories_info"
        }
    ]).then(result=>{
        let data = result.map(v=>Object.assign({},{_id:v._id,name:v.name,type:v.type,amount:v.amount,color:v.categories_info['color']}))
        res.json(data);
    }).catch(error=>{
        res.status(400).json("loohup collection error")
    })
}
module.exports={
    create_Catagories,
    get_Catagories,
    create_transaction,
    get_transaction,
    delete_transaction,
    get_Labels

}