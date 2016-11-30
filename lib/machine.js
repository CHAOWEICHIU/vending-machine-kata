'use strict'
module.exports = function(){
  const _ = require('lodash')
  let message = 'INSERT COIN'
    , acceptedCoins = {
        quarters: 0, // 25
        dimes   : 0, // 10
        nickels : 0 // 5
      }
    , rejectedCoins = {
        pennies : 0
      }
    , acceptedAmount = 0
    , rejectedAmount = 0
    , products = {
			cola: {
				name: 'cola',
				price: 1,
				qty: 0
			},
			chips: {
				name: 'chips',
				price: 0.5,
				qty: 1
			},
			candy: {
				name: 'candy',
				price: 0.65,
				qty:2
			}
		}


  return {
    displayMessage: function(){
      return message
    },
    insertCoins:function({quarters = 0, dimes = 0, nickels = 0, pennies = 0}){
			acceptedCoins  = { quarters, dimes, nickels }
			rejectedCoins  = { pennies }
			acceptedAmount = acceptedCoins.quarters * 0.25 + acceptedCoins.nickels * 0.05 + acceptedCoins.dimes * 0.1
			rejectedAmount = rejectedCoins.pennies * 0.01
			message = `Accepted Amount: ${acceptedAmount}, Rejected Amount: ${rejectedAmount}`
			return this
		},
    selectProduct(selectedProduct){
      if(!selectedProduct){
        return _.values(products)
                .map(item=>{
  	                   let msg = `${item.name}: $${item.price}`
      	               return item.qty === 0
                                ? ` ${msg} [out of stock]`
                                : ` ${msg} [in stock]`
  	                })
  	            .toString()
  						  .trim()
      } else {
        let selectedProductPrice = products[selectedProduct].price

        products[selectedProduct].qty === 0
					? message = `${selectedProduct} is out of stock`
					: message = `${selectedProduct} is $${selectedProductPrice}, please insert $${selectedProductPrice - acceptedAmount}`

        acceptedAmount - selectedProductPrice > 0
					? message = `${selectedProduct} is ready, you would have $${acceptedAmount-selectedProductPrice + rejectedAmount} return, Thank you ^_^`
					: ''

        return this
      }
		},
    returnCoins: function(){
			return _.merge(acceptedCoins, rejectedCoins)
		}
  }
}
