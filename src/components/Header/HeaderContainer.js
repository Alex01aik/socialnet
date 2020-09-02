import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {setAuthUserData} from '../../redux/authReducer';
import { authoring } from '../../api/api';

class HeaderContainer extends React.Component {

    componentDidMount() {
        authoring(setAuthUserData);
    }
    render() {
        return(
            <Header {...this.props} />
        )
    }
    
}

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);