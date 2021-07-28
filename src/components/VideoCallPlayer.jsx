import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { SocketContext } from '../contexts/SocketContext';

const useStyles = makeStyles((theme) => ({
    video: {
        width: '750px',
        [theme.breakpoints.down('xs')]: {
            width: '400px',
        },
    },
    gridContainer: {
        justifyContent: 'center',
        marginTop: '100px',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    paper: {
        padding: '10px',
        border: '2px solid black',
        margin: '10px',
    }

}));

const VideoCallPlayer = () => {
    const classes = useStyles();
    const { name, callAccepted, myVideoRef, incomingStream, userVideoRef, callEnded, myVideo, connectionInfo, screenStream, myScreenVideoRef, userScreenVideoRef } = useContext(SocketContext);
    console.log("VideoCallPlayer---", myVideo)
    return (
        <Grid container className={classes.gridContainer}>
            {/* Our own video */}
            {myVideo && (
                <Paper className={classes.paper}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>{name || 'Unknown User'}</Typography>
                        {console.log(myVideoRef)}
                        <video playsInline muted ref={myVideoRef} autoPlay className={classes.video} />
                    </Grid>
                </Paper>
            )}
            {/* Our own screen sharing */}
            {screenStream && (
                <Paper className={classes.paper}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>My Screen</Typography>
                        <video playsInline muted ref={myScreenVideoRef} autoPlay className={classes.video} />
                    </Grid>
                </Paper>
            )}
            {/* User screen sharing */}
            {incomingStream && (
                <Paper className={classes.paper}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>{connectionInfo.name || "Unknown User's screen"}</Typography>
                        <video playsInline muted ref={userScreenVideoRef} autoPlay className={classes.video} />
                        {console.log("error123")}
                    </Grid>
                </Paper>
            )}
            {/* User's video */}
            {callAccepted && !callEnded && (
                <Paper className={classes.paper}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>{connectionInfo.name || 'Unknown User'}</Typography>
                        <video playsInline ref={userVideoRef} autoPlay className={classes.video} />
                        {console.log(userVideoRef)}
                    </Grid>
                </Paper>
            )}

        </Grid>
    )
}

export default VideoCallPlayer
