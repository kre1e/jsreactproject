import { ACTIONS } from "./app"

export default function OperationButton({ dispatch, operation }) {
    return <button on onClick={() =>
        dispatch ({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation}})}
    
    >
        
    {operation}
    </button>
}