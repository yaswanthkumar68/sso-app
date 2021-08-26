import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Route, Switch} from 'react-router-dom'
import { loginStatusAction } from '../../actions/loginAction'
import Login from '../authentication/Login'
import Home from '../privateComponents/Home'
import Account from '../privateComponents/Account'
import NoRoute from '../privateComponents/NoRoute'
import PrivateRoute from './PrivateRoute'
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from '../../selectors/authConfig';

const Routing = (props) => {
    const loginStatus = useSelector(state => state.loginStatus)
    const dispatch = useDispatch()

    const msalInstance = new PublicClientApplication(msalConfig)
    
    return(
        <div>
            {loginStatus && 
                <div>
                    <Link to="/home">Home</Link>|
                    <Link to="/account">Account</Link>|
                    <Link to="/" onClick={() => {
                        sessionStorage.clear()
                        dispatch(loginStatusAction())
                        msalInstance.logoutPopup()
                    }}>Logout</Link>
                </div>
            }
            <Switch>
                <Route path='/' component={Login} exact={true}/>
                <PrivateRoute path='/home' component={Home} />
                <PrivateRoute path='/account' component={Account} />
                <Route component={NoRoute} />
            </Switch>
        </div>
    )
}

export default Routing