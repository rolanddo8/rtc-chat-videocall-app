import React from 'react';
import {IconButton} from "@material-ui/core";
import { VideoCameraOutlined } from '@ant-design/icons';

const  VideoCallButton = () => {
    const handleVideoButton = () =>{
        window.open('/videocall', "", "width=1920,height=1028")
    }
    return(
        <>
        <IconButton variant="icon"  onClick={handleVideoButton}><VideoCameraOutlined className="login-button facebook"  /> </IconButton>
        </>


    )
}

export default VideoCallButton;