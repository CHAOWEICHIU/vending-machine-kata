module.exports = function(){
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
  }
}
