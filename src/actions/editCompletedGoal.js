export function editCompletedGoal(goal_id, goal){
    // debugger
    
    return(dispatch) => {
        fetch(`http://localhost:3000/api/v1/goals/${goal_id}`, {
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
        },    
        method: "PATCH", 
        //must send it over as a string, hence we stringify
        body: JSON.stringify(goal)
        })
        .then(response => response.json())
        .then(goal => dispatch({
            type: "EDIT_COMPLETED_GOAL", 
            goal
        }))
        .catch(alert)
        
    }
}