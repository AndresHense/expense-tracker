import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

const IncomeExpenses=()=>{

	const {transactions}=useContext(GlobalContext);

	const incomeArr=[];
	const expenseArr=[];

	transactions.map(tr=> tr.amount>=0 ? incomeArr.push(tr.amount) : expenseArr.push(tr.amount));
	const income=incomeArr.reduce((a,b)=>(a+=b),0).toFixed(2);
	const expense=expenseArr.reduce((a,b)=>(a+=b),0).toFixed(2);
	return(
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<p  className="money plus">+${Math.abs(income)}</p>
			</div>
			<div>
				<h4>Expenses</h4>
				<p className="money minus">-${Math.abs(expense)}</p>
			</div>
		</div>
	);
}

export default IncomeExpenses;
