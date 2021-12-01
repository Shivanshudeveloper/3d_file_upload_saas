const express =require('express');
const router=express.Router();
const OffersFunc=require("./OffersFunc");

router.post('/addoffer',OffersFunc.addoffer);
router.get('/getoffers',OffersFunc.getoffers);
router.get('/getcompletedoffers',OffersFunc.getcompletedoffers);
router.patch('/updateoffer',OffersFunc.updateoffer);
router.delete('/removeoffer/:id',OffersFunc.removeoffer);

module.exports=router;