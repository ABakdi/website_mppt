const {Seeder} = require('mongo-seeding')
const path = require('path')
const config = {
  database: 'mongodb+srv://Admin:PyjLtzbLMJ9SngXA@mpptcluster.bkxcf.mongodb.net/Mppt?retryWrites=true&w=majority',
  dropDatabase: true,
  mongoClientOptions:{ useNewUrlParser: true, useUnifiedTopology: true }
}

const collectionReadingOptions = {
  extensions: ['ts', 'js', 'cjs', 'json'],
  transformers: [
    Seeder.Transformers.replaceDocumentIdWithUnderscoreId,
  ]
}

const seeder = new Seeder(config)

const collections = seeder.readCollectionsFromPath(
  path.resolve('./seeds'),
  collectionReadingOptions
)
async function seed(){
  console.log(collections)
try{
  await seeder.import(collections)
  console.log('SEeded')
} catch(err){
  console.log(err)
}
}

seed()
