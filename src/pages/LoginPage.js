import React from 'react';
import { MailOutline, Facebook } from '@material-ui/icons';
import "firebase/app";
import "antd/dist/antd.css";

import { auth } from '../firebase';
import firebase from 'firebase/app';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    rootLogin: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        display: "flex",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "200px"
    },
    headings: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(23, 10, 24)"
    }

}));

const LoginPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.rootLogin}>
            {/* <Paper className={classes.container}>
                <TextField id="filled-basic" label="email" variant="filled" />
                <TextField id="filled-basic" label="password" variant="filled" />
            </Paper> */}
            
            <div id="login-card">

            <div className="login-button google" onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}><MailOutline /> Sign In with Google</div>
            <br /> <br />
            <div className="login-button facebook" onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}><Facebook /> Sign In with Facebook</div>
            </div>
        </div>
    )
};

export default LoginPage;