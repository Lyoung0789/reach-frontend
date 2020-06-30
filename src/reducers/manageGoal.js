export default function manageGoal(state = {
    goals: [], 
    todos:[]
}, action){

    switch(action.type){
        case 'FETCH_GOALS':
            
            return {
                ...state,
                goals: [...state.goals],
                todos: [...state.todos]
            }

        case 'ADD_GOALS':
            //added goals to state
            return {
                ...state, 
                goals: action.goals, 
            }

        default: 
            return state

        
    }


}