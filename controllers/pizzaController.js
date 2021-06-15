const {connection} = require('mongoose')
const PizzaModel = require('../models/pizza')

async function addPizza(schema) {
    console.log('controller add pizza', schema)
    try {
        
        const pizza = new PizzaModel(schema)
        console.log('controller pizza ', pizza) 
        const savedPizza = await pizza.save()
        console.log('controller save pizza ', savedPizza) 
        return savedPizza
    } catch(err) {
        // console.log('controller add pizza error', err)
        return err
    }
}

async function getPizzas(ingredients = {}) {
    try {
        const pizzas = await connection.collection('pizzas').find(ingredients).toArray()

        return pizzas    
    } catch (error) {
        return error
    }
} 

module.exports = {
    addPizza, getPizzas
}