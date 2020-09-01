import React from 'react';
import './Profile.css';
import {Preloader} from '../common/Preloader/Preloader';

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader />
    }

    return(
        <div className="profileInfo">
            <div>
            <img
                className="backgroundImage"
                alt="backgroundImage"
                src="https://p.bigstockphoto.com/rwyznvNQ76U2liDFDH6g_bigstock-Yachts-In-City-Bay-At-Hot-Summ-283784740.jpg"
            />
            </div>
            <div>
                <img
                    className="avatar"
                    alt="avatar"
                    src={props.profile.photos.large}
                />
                {props.profile.aboutMe}
            </div>
        </div>
    )
}

export default ProfileInfo;