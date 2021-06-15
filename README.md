# Pizzeria

Create an express app to serve the purpose of exposing a JSON API to be consumed by a frontend client for ordering pizza.

The following entities should be created (including proper relations):

* *pizza* - has a name, price and ingredients
* *order item* - has a pizza and quantity
* *order* - has items

The following endpoints should return a JSON response:
* `/api/orders` (list of orders)
* `/api/orders/:id` (details of an individual order)
* `/api/pizzas` (list of pizzas; see 'example-pizzas.json')
  * This endpoint also takes a query param, for e.g. `/api/pizzas?ingredients=oregano` should return pizzas which contain `oregano` as ingredient 
