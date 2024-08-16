export type BudgetActions = 
{type: 'set_budget', payload: {budget: number}};

export type BudgetState = {
    budget: number;
}

export const initialState : BudgetState =  {
    budget: 0
}

// Define the reducer ================================ |
export const budgetReducer = (
    state: BudgetState,
    action : BudgetActions
) => {

    if(action.type === 'set_budget') {
        return {
            ...state,
            budget: action.payload.budget
        }
    }

    return state;
} 