//对state数据仓库合并更新
const reducer = (state,{type,payload}) => {
	console.log('reducer----',state);
	switch (type) {
    	case 'CHANGE':
      		return {...state,userinfo:payload}
		default:
			return state;	
	}	
}

export default reducer;