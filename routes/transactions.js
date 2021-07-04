const express=require('express');
const router=express.Router();
const {getTransactions,addTransaction,deleteTransaction}=require('../controllers/transactionsControler');

router.route('/').get(getTransactions).post(addTransaction);

router.route('/:id').delete(deleteTransaction);
//router.get('/',(req,res)=> res.send('Hello'));

module.exports=router;
