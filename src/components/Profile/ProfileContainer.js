import React from 'react';
import { connect } from 'react-redux';
import './Profile.css';
import Profile from './Profile';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 11247;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render(){
        return(
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
            </div>
        )
    }
    
}

let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status
})

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus  }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);