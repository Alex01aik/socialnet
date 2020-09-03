import React from 'react';
import './Profile.css';

class ProfileStatus extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            editMode: false
        }
    }

    activateEditMode = () => {
        this.setState({editMode: true});
    }
    deactivateEditMode = () => {
        this.setState({editMode: false});
    }

    render(){
        return(
            <div className="profileStatus">
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={() => this.activateEditMode()}>{this.props.status}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={() => this.deactivateEditMode()} value={this.props.status} />
                </div>}
            </div>
        )
    }
    }
    

export default ProfileStatus;
