const expect = require('chai').expect
    , Machine = require('../lib/machine')

describe('Vending Machine', ()=>{

  it('Machine', ()=>{
    let machine = new Machine
    expect(machine.displayMessage()).to.equal('INSERT COIN')
  })
})
