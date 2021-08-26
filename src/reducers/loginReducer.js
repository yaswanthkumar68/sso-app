const initialLoginState = false

const loginReducer = (state = initialLoginState, action) => {
    switch (action.type) {
        case 'LOGIN_STATUS' : {
            return !state
        }
        default : {
            return state
        }
    }
}

export default loginReducer