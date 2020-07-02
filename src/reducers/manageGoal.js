export default function manageGoal(state = {
    goals: []
}, action){
    // debugger

    switch(action.type){
      
        case 'FETCH_GOALS':
            //added goals to state
            return { 
                ...state, goals: action.goals, 
            }
        case 'ADD_GOAL':
            return {
                ...state, goals:[...state.goals, action.goal]
            }
        
            
        case 'ADD_TODO':
            //for this we had to make sure we are returning a whole goal from the back end, this makes it easier for us since todos are attached to goals. 
            // if this wasnt the case we would have to find the right goal accoridng to the todo then iterate and replace. 
            // here we have the the goal already. all we need to do is iterate thrpiugh the store and replace with the right action.goal
            return {
                ...state, goals: state.goals.map(goal => {
                    if (goal.id === action.goal.id){
                        return action.goal
                    } else {
                        return goal
                    }
                })
            }


        case 'EDIT_TODO': 
            return{
                ...state, goals: state.goals.map(goal => {
                    if (goal.id === action.goal.id){
                        return action.goal
                    } else {
                        return goal
                    }
                })
            }
        
        case 'EDIT_COMPLETED_GOAL':
            return{
                ...state, goals: state.goals.map(goal => {
                    if (goal.id === action.goal.id){
                        return action.goal
                    } else {
                        return goal
                    }
                })
            }

        default: 
            return state

        
    }


}