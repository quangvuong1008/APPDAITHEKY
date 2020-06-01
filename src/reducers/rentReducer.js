const DEFAULT_STATE = {
    countRentData:0,
    rentData: null
}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {

        case 'GET_RENTDATA_SUCCESS': {
            return {
                ...state,
                rentData:action.payload.rentData,
                countRentData:action.payload.countRentData
            }
        }
        case 'GET_RENTDATA_FAIL': {
            return {


            }
        }


    }
    return state;
}
