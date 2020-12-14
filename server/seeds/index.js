const fs = require('fs')
const path = require('path')

const seeds = {}


fs.readdirSync(__dirname)
  .filter((file) =>
    file !=='index.js'
  )
  .forEach((file) =>{
    const collection = require(path.join(__dirname, file))
    seeds[file] = collection
  })
console.log(seeds)

module.exports = seeds
