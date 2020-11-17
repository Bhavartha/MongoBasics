const assert = require('assert')
const Users = require('../models/userModel')

// Describe tests
describe("Finding records from db", () => {

    beforeEach((done) => {
        var u = new Users({
            name: 'Z',
            age: 19
        })

        u.save().then(() => {
            // not New = saved to db
            assert(!u.isNew)
            done()
        })
    })

    // Create tests
    it('Finds one record from db', (done) => {
        Users.findOne({ name: 'Z' })
            .then((result) => {
                assert(result.name === 'Z')
                done()
            })
    })
})