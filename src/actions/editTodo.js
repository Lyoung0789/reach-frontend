export function editTodo(todo, goal_id){
    // debugger
    
    return(dispatch) => {
        fetch(`http://localhost:3000/api/v1/goals/${goal_id}/todos/${todo.id}`, {
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
        },    
        method: "PATCH", 
        //must send it over as a string, hence we stringify
        body: JSON.stringify(todo)
        })
        .then(response => response.json())
        .then(goal => dispatch({
            type: "EDIT_TODO", 
            goal
        }))
        .catch(alert)
        
    }
}