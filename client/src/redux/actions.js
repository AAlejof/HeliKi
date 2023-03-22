import {
    POST_RSVP,
    GET_ALLRSVP,
    GET_RSVPDETAIL
} from "./action.types.js";
import axios from "axios";

export function getAllRsvp(){	return async function (dispatch) {
    try {
        const response = await axios.get("/publications/all");
        return dispatch({
            type: GET_ALLRSVP,
            payload: response.data,
        });
    } catch (error) {
        console.log(error);
    }
    };
};

export const getRsvpDetail = (id) => async (dispatch) => {
	try {
		let response = await axios(`/rsvp/${id}`);

		return dispatch({
			type: GET_RSVPDETAIL,
			payload: response.data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const postRsvp = (guest) => async () => {
	try {
		const data = await axios.post("/rsvp", guest);
		return data;
	} catch (error) {
		console.log(error);
	}
};