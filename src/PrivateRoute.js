import * as React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route {...rest} render={(props) => (
        !isLoggedIn
            ? <Component {...props} />
            : <Redirect to='/' />
    )}/>
)

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, null)(PrivateRoute);