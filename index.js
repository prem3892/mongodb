//!  1.  to check dbs 
//  show dbs 

//!  2.  to jump in db 
// use  dbname

//!  3. to check collections 
// show collections 

//!  4. how to create database 
// use dbname 

//!  5. to create collections 
// db.createCollection('collectionName');

//! 6. to delete collection
// db.hello.drop()
// db.getCollection('hello').drop();

//! to delete database 
// db.dropDatabase()

//! 7. to insert 1 doccument
// db.collectionname.insertOne(objectData)

//! 8. to insert many doccuments
// db.collectionname.insertMany(objectData) 

// ! 9 to find all data 
// db.collectionname.find();

//!  10 to delete 1 data 
//  db.collectionname.deleteOne({});

//!  11 to delete many data 
//  db.collectionname.deleteMany({});


//! 12 to update  1 data 
// db.collectionname.updateOne({name: ''}, {$set: {}})


//! 13 to update many  data 
// db.collectionname.updateMany({name: ''}, {$set: {}})


// ! findone and find
// db.user.find({name: "abc"});
// db.user.findOne({name: "abc"});



//! import data in mongoDB collection 
// mongoimport --uri "mongodb+srv://premrathore654:admin123@cluster0.urh1r.mongodb.net/" --db product --collection products --file "C:\Users\premr\Desktop\ducat\mongodb\products.json" --jsonArray


// ! operators 
//! comparison operator lt , gt, eq, ne, gte, lte, in, nin 

// db.products.find({price: {$gt: 5}})
// db.products.find({price: {$lt: 5}}).count()
// db.products.find({price: {$eq: 5}}).count()
// db.products.find({age: {$gte: 20}})
// db.products.find({age: {$lte: 20}})
// db.products.find({age: {$in:[20, 25, 30]}})
// db.products.find({age: {$nin:[20, 25, 30]}})

// ! logical operators
//  and , or , not , nor 
// db.products.find({price: {$and: [{age: {$gt:20}}, {age: {$lt:30}}]} })

// or 
// db.products.find({$or:[{price: {$gt: 5000}}, {stock: {$lt: 20}}]}).count()

// not
// db.products.find({ price: { $not: { $gt: 5000 } } }).count()

// nor
// db.products.find({ $nor: [{ price: { $gt: 5000 } }, { stock: { $lt: 20 } }] }).count()

//! element operator it return true false 
// $exists
// db.products.find({ minimumOrderQuantity1: { $exists: true } }).count();


// ! aggregate queries 
// with match 
// db.products.aggregate([{$match: {price: {$eq: 799.99}}}])
// db.products.aggregate([{$match: {price: {$eq: 799.99}, stock: {$gt:50}}}])


// ? $limit
// db.products.aggregate([{$limit:2}])

// ? $count 
// db.products.aggregate([{$match: {price: {$gt:500}}}, {$count: "tottal"}])

// ? sort data  ascending 
// db.products.aggregate([{$sort: {price: 1}}])
// db.products.aggregate([{$sort: {price: -1}}])
