export type BudgetActions = 
{type: 'set_budget', payload: {budget: number}} |
{type: 'show-modal'} |
{type: 'hide-modal'};

export type BudgetState = {
    budget: number;
    modal: boolean;
}

export const initialState : BudgetState =  {
    budget: 0,
    modal: false
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

    if(action.type === 'show-modal'){
        return {
            ...state,
            modal: true
        }
    }

    if(action.type === 'hide-modal'){
        return {
            ...state,
            modal: false
        }
    }

    return state;
} 