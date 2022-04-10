import { createStore } from "redux";
const intialState = {
    pincode: null,
    hospital: null,
    bedtype: null
}
const Reducer = (state = intialState, action) => {
    if (action.type === "pincode") {
        return {
            ...state,
            pincode: action.payload.pincode
        }
    }
    if (action.type === "addhospital") {
        return {
            ...state,
            hospitalID: action.payload.hospital,
            bedtype: null
        }
    }
    return state
};
const store = createStore(Reducer)
export default store;
