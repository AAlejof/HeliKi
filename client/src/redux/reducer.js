import {
    POST_RSVP,
    GET_ALLRSVP,
    GET_RSVPDETAIL
} from "./action.types.js";
//import axios from "axios";

const initialState = {
    getAllRsvp: [],
    getRsvpDetail:[]
};

function rootReducer(state = initialState, action){
    const { type, payload }  = action;

    switch (action.type) {

        case GET_ALLRSVP:
			return {
				...state,
				allClients: payload,
			};
		case GET_RSVPDETAIL:
			return {
				...state,
				clientDetail: payload,
			};
		case POST_RSVP:
			return {
				...state,
		};
        default: return {
			...state
		};

    }
};

export default rootReducer;