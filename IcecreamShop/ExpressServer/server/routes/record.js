const { response } = require('express');
const express = require('express');
const { join } = require('path');
const dbObject = require(join(__dirname,'../db/conn.js'));
const router = express.Router();
 router.route('/items').get(async (req, res) => {
    const dbConnect = dbObject.getDb();
    dbConnect
    .collection('ProductsList').find({}).limit(50)
    .toArray((err, result) => {
        if(err){
            res.status(400).send("Error fetching items");
        }
        else{
            res.json(result);
        }
    });
});

router.route('/addorders').post(async (req, res) => {
    const dbConnect = dbObject.getDb();
    const order = {
        items: req.body.items,
        total: req.body.total
    }
    if(!req.body.items){
        res.send({code: 400, message: "Bad request"})
    }
    else{
        dbConnect
        .collection('Orders')
        .insertOne(order, async (err, response) => {
        if(err){
            res.send({code: 400, reason: err})
        }
        else{
           res.send({code: 200, message: "successfully added"})
        }
    })
    }
    
});


router.route('/orders').get(async (req, res) => {
    const dbConnect = dbObject.getDb();
    dbConnect
    .collection('Orders').find({}).limit(50)
    .toArray((err, result) => {
        if(err){
            res.status(400).send("Error fetching items");
        }
        else{
            res.json(result);
        }
    });
});


router.route('/cart').get(async (req, res) => {
    const dbConnect = dbObject.getDb();
    dbConnect
    .collection('Cart').find({}).limit(50)
    .toArray((err, result) => {
        if(err){
            res.status(400).send("Error fetching items");
        }
        else{
            res.json(result);
        }
    });
});


router.route('/addtocart').post(async (req, res) => {
    const dbConnect = dbObject.getDb();
    const cartItems = {
        id: req.body.id,
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        total: req.body.total
    }
    dbConnect
    .collection('Cart')
    .insertOne(cartItems, async (err, response) => {
        if(err){
            res.send({code: 400, reason: err})
        }
        else{
            console.log("Added an item in the  cart")
            console.log(cartItems)
        }
    })
});


router.route('/updatecart').post(async (req, res) => {
    const dbConnect = dbObject.getDb();
    const productid = {id: req.body.id};
    const updates = {
        $inc: {
          qty: 1,
          price: req.body.price
        },
      };
    console.log(updates)
    dbConnect
    .collection('Cart')
    .updateOne(productid, updates, async (err, response) => {
        if(err){
            res.send({code: 400, reason: err})
        }
        else{
            console.log("Updated Cart items")
        }
    })
});

router.route('/decrementfromcart').post(async (req, res) => {
    const dbConnect = dbObject.getDb();
    const productid = {id: req.body.id};
    const updates = {
        $inc: {
          qty: -1,
          price: -req.body.price
        },
      };
    dbConnect
    .collection('Cart')
    .updateOne(productid, updates, async (err, response) => {
        if(err){
            res.send({code: 400, reason: err})
        }
        else{
            console.log("Decremented item in Cart items")
        }
    })
});


router.route('/removefromcart').post(async (req, res) => {
    const dbConnect = dbObject.getDb();
    const productid = {id: req.body.id};
    dbConnect
    .collection('Cart')
    .deleteOne(productid, async (err, response) => {
        if(err){
            res.send({code: 400, reason: err})
        }
        else{
            console.log("Deleted item from Cart items")
        }
    })
});
 
router.route('/deletecart').post(async (req, res) => {
    const dbConnect = dbObject.getDb();
    dbConnect
    .collection('Cart')
    .remove({}, async (err, response) => {
        if(err){
            res.send({code: 400, reason: err})
        }
        else{
            console.log("Deleted Cart items")
        }
    })
});


module.exports = router;


