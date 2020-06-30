

export function fetchGoals(){
    //using thunk to return a function
    return (dispatch) => {
        dispatch({type: "FETCH_GOALS"})
        fetch('http://localhost:3000/api/v1/goals/')
        .then(response => response.json())
        .then(goals => dispatch({
        type: "ADD_GOALS",
        goals
        }))
    }
    
}