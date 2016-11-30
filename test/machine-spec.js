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



})
