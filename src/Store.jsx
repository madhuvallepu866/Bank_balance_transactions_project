import { combineReducers, createStore } from "redux";
const initialstate = {
  Name: "",
  balance: 0,
  mobile: null,
};

const accountReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + +action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - +action.payload };
    case "mobilenum":
      return { ...state, mobile: action.payload };
    case "namechange":
      return { ...state, Name: action.payload };
    case "reset":
      return initialstate;
    default:
      return state;
  }
};
const transactionReducer = (state=[],action)=>{
    switch(action.type){
        case "ADD_TRANSACTION":
            return[...state,{
                id:action.payload.id,
                amount:action.payload.amount,
                type:action.payload.type,
                date:action.payload.date}]
        default:
            return state;
    }
}
const rootReducer=combineReducers(
    {
        account:accountReducer,
        transaction:transactionReducer
    }
);
const store = createStore(rootReducer);

export default store;
