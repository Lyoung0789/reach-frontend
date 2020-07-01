export function addGoal(data){
    
    return(dispatch) => {
        fetch('http://localhost:3000/api/v1/goals/', {
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
        },    
        method: "POST", 
        //must send it over as a string, hence we stringify
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