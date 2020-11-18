const assert = require('assert')
const Users = require('../models/userModel')

// Describe tests
describe("Deleting records from db", () => {

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
    it('Deletes one record from db', (done) => {
        Users.findOneAndRemove({ name: 'Z' })
            .then(() => {
                Users.findOne({ name: 'Z' }).then((result) => {
                    assert(result === null)
                    done()
                })
            })
    })

})