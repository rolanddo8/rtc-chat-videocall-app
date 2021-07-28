import React from 'react';
import VideoCallPlayer from '../VideoCallPlayer';
import Option from '../Option';
import Notifications from '../Notifications';



const HomePage = () => {
    return (
        <>
            <VideoCallPlayer />
            <Option>
                <Notifications />
            </Option>
        </>
    )
};

export default HomePage;