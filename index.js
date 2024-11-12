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

// ? sort data  ascending descending
// db.products.aggregate([{$sort: {price: 1}}])
// db.products.aggregate([{$sort: {price: -1}}]);

// ? $sum, $avg, $min

// db.products.aggregate([{$group: {_id: '', total: {$sum: "$price"}}}])


// db.products.aggregate([{$group: {_id: '', avg: {$avg: "$price"}}}])

// db.products.aggregate([{$group: {_id: '', min: {$min: "$price"}}}])


//! db.products.aggregate([ { $group: { _id: "$category", /* Group by the 'category' field*/ averagePrice: { $avg: "$price" }, /* Calculate the average price for each group*/ totalStock: { $sum: "$stock" }, /* Sum the stock for each category*/ count: { $sum: 1 } /* Count the number of products in each category*/ } }] )




//! Example 2: Group by Rating and Count Products with the Same Rating
// If you want to group products by their rating and count how many products have each rating, you can do something like this:




// db.products.aggregate([
//     {
//       $unwind: "$reviews"  // Flatten the reviews array so each review is treated as a separate document
//     },
//     {
//       $group: {
//         _id: "$reviews.rating",   // Group by the 'rating' field within the 'reviews' array
//         productCount: { $sum: 1 }  // Count how many products have the same rating
//       }
//     }
//   ])


//! Example 3: Get the Total Discounted Price per Product
// If you want to calculate the total discounted price for each product based on its price and discountPercentage, you can do the following:



// db.products.aggregate([
//     {
//       $addFields: {
//         discountedPrice: { $multiply: ["$price", { $subtract: [1, { $divide: ["$discountPercentage", 100] }] }] }
//       }
//     },
//     {
//       $project: {
//         title: 1,
//         price: 1,
//         discountPercentage: 1,
//         discountedPrice: 1
//       }
//     }
//   ])
  


//! Example 4: Group by Tags and Count Number of Products for Each Tag
// If you want to group by the tags field and count how many products have each tag, you can use the following query:



// db.products.aggregate([
//     { 
//       $unwind: "$tags"  // Unwind the tags array to treat each tag as a separate document
//     },
//     { 
//       $group: {
//         _id: "$tags",  // Group by the 'tags' field
//         count: { $sum: 1 }  // Count the number of products for each tag
//       }
//     }
//   ])
  

//!  Example 5: Group by Category and Calculate the Average Rating
// If you want to group products by their category and calculate the average rating of products within each category, you can use the following query:


// db.products.aggregate([
//     {
//       $unwind: "$reviews"  // Unwind the reviews array to treat each review as a separate document
//     },
//     {
//       $group: {
//         _id: "$category",  // Group by the 'category' field
//         averageRating: { $avg: "$reviews.rating" }  // Calculate the average rating for each category
//       }
//     }
//   ])
  



// const fn =  (n, memo={})=>{
//     if(n<=1) return n;
//     if(memo[n]) return memo[n];
//     return (
//         memo[n] =   fn(n-1, memo) + fn(n-2, memo)
//     )
// }

// fn(7)


// function factorial(n) {
//     if (n <= 1) {
//         return 1;  // Base case: factorial of 0 or 1 is 1
//     }
//     return n * factorial(n - 1);  // Recursive call to calculate factorial
// }

// const n = 5; 
// console.log(factorial(n));  


// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result += i;  // Multiply the current number with the result
//     }
//     return result;
// }

// console.log(factorial(5));  // Output: 120


// let n = 5;
// let result = 1;

// console.log(`${n}! = `);

// for (let i = n; i >= 1; i--) {
//     result *= i;
//     if (i === 1) {
//         console.log(`${i} = ${result}`);
//     } else {
//         process.stdout.write(`${i} * `);
//     }
// }
