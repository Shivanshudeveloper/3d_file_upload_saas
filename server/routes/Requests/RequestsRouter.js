const express =require('express');
const router=express.Router();
const RequestsFunc=require("./RequestsFunc");

router.post('/addrequest',RequestsFunc.addrequest);
router.get('/getrequests/:email',RequestsFunc.getrequests);
router.delete('/removerequest/:id',RequestsFunc.removerequest);

module.exports=router;