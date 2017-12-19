const INDEX_TEST = "INDEX_TEST";
const INDEX_SUCCESS = "INDEX_SUCCESS";
export function index() {
	return dispatch => {
		dispatch({type:INDEX_TEST});
		fetch("/api/v2/get/moive/list").then(response => {
			response.json().then(data => {
				dispatch({type:INDEX_SUCCESS,result:data.result})
			})
			
		})
		
	}
}