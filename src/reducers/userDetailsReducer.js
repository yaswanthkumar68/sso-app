const initialUserDetails = {}

const userDetailsReducer = (state = initialUserDetails, action) => {
    switch (action.type) {
        case 'GET_DETAILS' : {
            return {...state , ...action.payload}
        }
        default : {
            return state
        }
    }
}

export default userDetailsReducer