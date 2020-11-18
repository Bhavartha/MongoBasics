const assert = require('assert')
const Users = require('../models/userModel')

// Describe tests
describe("Updating records in db", () => {

    let u

    beforeEach((done) => {
        u = new Users({
            name: 'Z',
            age: 19
        })

        u.save().then(() => done())
    })

    // Create tests
    it('Update one record in db', (done) => {
        Users.findOneAndUpdate({ name: 'Z' }, { name: 'SZ' })
            .then(() => {
                Users.findOne({ _id: u._id }).then((result) => {
                    assert(result.name === 'SZ')
                    done()
                })
            })
    })

})