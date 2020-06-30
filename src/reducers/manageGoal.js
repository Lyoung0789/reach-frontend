export default function manageGoal(state = {
    goals: []
}, action){

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

        default: 
            return state

        
    }


}