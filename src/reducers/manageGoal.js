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
            return {
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