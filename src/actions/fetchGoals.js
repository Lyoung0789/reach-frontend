

export function fetchGoals(){
    //using thunk to return a function. Thunk allows us to use dispatch in an action creator
    return (dispatch) => {
        
        fetch('http://localhost:3000/api/v1/goals/')
        .then(response => response.json())
        .then(goals => dispatch({
        type: "FETCH_GOALS",
        goals
        }))
        .catch(alert)
    }
    
}