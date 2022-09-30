
const fetchDataRequest = () => {
    return {
        type : "FETCH_OUR_FOOD_DATA_REQUEST"
    }
}

const fetchDataSuccess = data => {
    return {
        type: "FETCH_OUR_FOOD_DATA_SUCCESS",
        payload: data
    }
}

const fetchDataFailure = error => {
    return {
        type: "FETCH_OUR_FOOD_DATA_FAILURE",
        payload: error
    }
}



export const fetchOurFoodData = url => {
    return dispatch => {
        dispatch(fetchDataRequest());

        fetch(url)
        .then(res => res.json())
        .then(response => dispatch(fetchDataSuccess(response)))
        .catch(err => dispatch(fetchDataFailure(err.message)))
    }
}