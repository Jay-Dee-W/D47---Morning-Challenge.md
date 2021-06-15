const express = require('express')
const router = express.Router()
const { getPizzas, addPizza } = require('../controllers/pizzaController')
const { addOrder, getOrders } = require('../controllers/orderController')
const { addOrderItem } = require('../controllers/orderItemController')

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router
    .route('/pizzas')
    .get(async (req, res) => {
        const params = req.query
    
        console.log(params)
    
        const content = await getPizzas(params)
    
        res.send(content)
    }
    )
    .post(async (req, res) => {
        // console.log( 'pizzas post', req.body)
        const params = req.body
    
        const content = await addPizza(params)
    
        res.send(content)
    }
    )

router
    .route('/orders')
    .get(async (_, res) => {
        // const params = req.query
    
        const content = await getOrders()
    
        res.send(content)
    }
    )
    .post(async (req, res) => {
        const params = req.body
    
        const orderItem = await addOrderItem(params)
        const content = await addOrder(orderItem)
    
        res.send(content)
    }
    )

module.exports = router