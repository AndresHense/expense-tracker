export default (state,action)=>{
	switch(action.type){
		case 'DELETE_TRANSACTION':
			return {
				...state,
					transactions: state.transactions
							.filter(tr => tr._id !== action.payload)
			}
		case 'TRANSACTION_ERROR':
			return {
				...state,
					error: action.payload
			}	
		case 'GET_TRANSACTIONS':
			return {
				...state,
				loading:false,
				transactions: action.payload
			}	

		case 'ADD_TRANSACTION':
			return {
				...state, transactions: [...state.transactions,action.payload]
			}	
		default:
			return state;
	}
}
