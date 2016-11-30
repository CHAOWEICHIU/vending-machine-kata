const expect = require('chai').expect
    , Machine = require('../lib/machine')

describe('machine', ()=>{

  let machine, coins, msg

  beforeEach(()=>{
    machine = new Machine
    coins = ''
    msg = ''
  })

  describe('.displayMessage()', ()=>{
    it('INSERT COIN without inserting coin', ()=>{
      expect(machine.displayMessage()).to.equal('INSERT COIN')
    })
  })

  describe('.insertCoins(coins).displayMessage()', ()=>{
		it('display amount that is accepted, and rejected', ()=>{
			coins = { quarters: 1, dimes : 1, nickels : 1, pennies : 2}
			msg = 'Accepted Amount: 0.4, Rejected Amount: 0.02'
			expect(machine.insertCoins(coins).displayMessage()).to.equal(msg)
		})
	})

  describe('.selectProduct()', ()=>{
		it('Display proper message after Select Product without selecting a product', ()=>{
			msg = 'cola: $1 [out of stock], chips: $0.5 [in stock], candy: $0.65 [in stock]'
			expect(machine.selectProduct()).to.equal(msg)
		})
	})


})
