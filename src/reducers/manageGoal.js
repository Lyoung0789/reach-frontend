export default function manageGoal(state = {
    goals: []
}, action){

    switch(action.type){
      
        case 'FETCH_GOALS':
            //added goals to state
            return { 
                goals: action.goals, 
            }

        default: 
            return state

        
    }


}