import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router'

const PrivateRoute = ({component:Component, ...rest}) => {

    const loginStatus = useSelector(state => state.loginStatus)

    return(
        <Route
            {...rest} render={(props) => {
                return loginStatus ? (
                    <Component {...props} /> ) : (
                    <Redirect
                        to={{
                            pathname:'/'
                        }}
                    />
                )
                    
            }}
        />
    )

}

export default PrivateRoute