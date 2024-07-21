const routes = require('express').Router()

const controller =require('../controller/controller');
routes.route('/api/Catagories')
    .post(controller.create_Catagories)
    .get(controller.get_Catagories)

routes.route('/api/transaction')
    .post(controller.create_Transaction)
    .get(controller.get_Transaction)
    .delete(controller.delete_transaction)


routes.route('/api/labels')
    .get(controller.get_Labels)
module.exports=routes