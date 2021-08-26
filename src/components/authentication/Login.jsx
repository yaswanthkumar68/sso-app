import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { msalConfig } from '../../selectors/authConfig';
import { PublicClientApplication } from '@azure/msal-browser';
import { loginStatusAction } from '../../actions/loginAction';
import { getDetails } from '../../actions/userDetailsAction';
import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react"

const Login = (props) => {

    // const loginStatus = useSelector(state => state.loginStatus)

    const dispatch = useDispatch()

    const msalInstance = new PublicClientApplication(msalConfig)

    const handleLogin = async() => {
        try {
            const response = await msalInstance.loginPopup()
            // console.log(response, 'response')
            const data = {
                name : response.account.name,
                username : response.account.username
            }
            console.log(data, 'data')
            dispatch(loginStatusAction())
            dispatch(getDetails(data))
            props.history.push('/home')

        }
        catch(error){
            alert(error)
        }
    }

    return(
        <div>
            <h1>sign in here</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login