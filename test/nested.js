const assert = require('assert')
const Authors = require('../models/authorModel')
const mongoose = require('mongoose')

// Describe tests
describe("Testing nested queries", () => {
    
    before(async ()=>{
        await mongoose.connection.collections.authors.drop()
    })

    let a
    it('Inserting into db', async () => {
        a = new Authors({
            name: "SZ",
            age: 99,
            books: [{
                title: "DSA",
                pages: 200
            }]
        })
        await a.save()
        assert(!a.isNew)
    })

    it('Updating', async () => {
        let res = await Authors.findOne({ _id: a._id })
        res.books.push({
            title: "SP",
            pages: 150
        })
        await res.save()
        assert(res.books.length === 2)
    })
})