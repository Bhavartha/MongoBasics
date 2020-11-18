const assert = require('assert')
const Users = require('../models/userModel')

// Describe tests
describe("Finding records from db", () => {

    let u

    beforeEach((done) => {
        u = new Users({
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

    it('Finds record using id', (done) => {
        Users.findOne({ _id: u._id })
            .then((result) => {
                assert(result._id.toString() === u._id.toString())
                done()
            })
    })
})