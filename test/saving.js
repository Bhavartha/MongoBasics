const assert = require('assert')
const Users = require('../models/userModel')

// Describe tests
describe("Saving users to db", () => {

    // Create tests
    it('Saves record to db', (done) => {
        var u = new Users({
            name: 'Silver',
            age: 19
        })

        u.save().then(() => {
            // not New = saved to db
            assert(!u.isNew)
            done()
        })
    })
})