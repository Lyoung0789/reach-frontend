export function addTodo(data, goalId){
    // debugger
    return(dispatch) => {
        fetch(`http://localhost:3000/api/v1/goals/${goalId}/todos`, {
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
        },    
        method: "POST", 
        
        body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(goal => dispatch({
            type: "ADD_TODO", 
            goal
        }))
        .catch(alert)
        
    }
}