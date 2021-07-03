export default (state,action)=>{
	switch(action.type){
		case 'DELETE_TRANSACTION':
			return {
				...state,
					transactions: state.transactions
							.filter(tr => tr.id !== action.payload)
			}	
		case 'ADD_TRANSACTION':
			return {
				...state, transactions: [...state.transactions,action.payload]
			}	
		default:
			return state;
	}
}
