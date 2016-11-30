const expect = require('chai').expect
    , Machine = require('../lib/machine')

describe('machine', ()=>{

  let machine, coins, msg, operation

  beforeEach(()=>{
    machine = new Machine
    coins = ''
    msg = ''
    operation = ''
  })

  describe('.displayMessage()', ()=>{
    it('INSERT COIN without inserting coin', ()=>{
      msg       = 'INSERT COIN'
      operation = machine.displayMessage()
      expect(operation).to.equal(msg)
    })
  })

  describe('.insertCoins(coins).displayMessage()', ()=>{
		it('display amount that is accepted, and rejected', ()=>{
      msg = 'Accepted Amount: 0.4, Rejected Amount: 0.02'
      coins = { quarters: 1, dimes : 1, nickels : 1, pennies : 2}
      operation = machine.insertCoins(coins).displayMessage()
			expect(operation).to.equal(msg)
		})
	})

  describe('.selectProduct()', ()=>{
		it('Display proper message after Select Product without selecting a product', ()=>{
      msg = 'cola: $1 [out of stock], chips: $0.5 [in stock], candy: $0.65 [in stock]'
      operation = machine.selectProduct()
			expect(operation).to.equal(msg)
		})
	})

  describe('.selectProduct("chips").displayMessage()', ()=>{
		it('Display proper message after selected product[in stock] with inadequate amoutn of money', ()=>{
      msg = 'chips is $0.5, please insert $0.5'
      operation = machine.selectProduct('chips').displayMessage()
			expect(operation).to.equal(msg)
		})
	})

  describe('.insertCoins(coins).selectProduct("chips").displayMessage()', ()=>{
		it('Display proper message select in stock product with inadequate amoutn of money', ()=>{
			coins = { quarters: 1 }
			operations = machine.insertCoins(coins)
												  .selectProduct('chips')
												  .displayMessage()
			msg = 'chips is $0.5, please insert $0.25'
			expect(operations).to.equal(msg)
		})
	})

  describe('.selectProduct("cola").displayMessage()', ()=>{
		it('select product[out of sotck]', ()=>{
			coins = { quarters: 1 }
			operations = machine.insertCoins(coins)
												  .selectProduct('cola')
													.displayMessage()
			msg = 'cola is out of stock'
			expect(operations).to.equal(msg)
		})
	})

  describe('.insertCoins(coins).selectProduct("chips").displayMessage()', ()=>{
		it('select in stock product with sufficient amoutn of money', ()=>{
			coins = { quarters: 4 }
			operations = machine.insertCoins(coins)
													.selectProduct('chips')
													.displayMessage()
			msg = 'chips is ready, you would have $0.5 return, Thank you ^_^'
			expect(operations).to.equal(msg)
		})
	})







})
