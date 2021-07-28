import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {  ChatEngineWrapper, ChatSocket, ChatFeed } from 'react-chat-engine';
import { auth } from '../../firebase';

import { useAuth } from '.././../contexts/AuthContext';
import axios from 'axios';

const privateEngineKey = "08f520d7-688d-4663-8866-c44cc7d440bc";
const projectID = "174f7507-2e8c-4460-95e8-b6b74586d48a";


const Chats = () => {
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const { user } = useAuth();
    console.log(user);


    const [username, setUsername] = useState('')

    
    const handleLogout = async () => {
        await auth.signOut();

        history.push('/');
    };
    
    const groupMessage = () => {
        history.push('/groupmessage')
    }

    const getFile = async (url) => {
        console.log(url);
        const response = await fetch(url);
        console.log("res", response)
        const data = await response.blob();

        return new File([data], "userPhoto.jpg", { type: 'image/jpeg' });
    };

    useEffect(() => {
        if (!user) {
            history.push('/');
            return;
        }

        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "project-id": "174f7507-2e8c-4460-95e8-b6b74586d48a",
                "user-name": user.email,
                "user-secret": user.uid,
            }
        }).then(() => {
            setLoading(false);
        })
            .catch(() => {
                console.log('there')
                let formdata = new FormData();
                formdata.append('email', user.email);
                formdata.append('username', user.email);
                formdata.append('secret', user.uid);

                getFile(user.photoURL)
                    .then((avatar) => {
                        formdata.append('avatar', avatar, avatar.name);
                        console.log(formdata)
                        axios.post('https://api.chatengine.io/users',
                            formdata,
                            { headers: { "private-key": "08f520d7-688d-4663-8866-c44cc7d440bc" } }
                        )
                            .then(() => setLoading(false))
                            .catch((error) => console.log(error));
                    })
            })
    }, [user, history]);
    console.log(loading, user);
    if (!user || loading) return 'Loading ...';
    return (
        <div className="chat-page">
            <div className="nav-bar">
                <div className="logo-tab">
                       Puzzel * 
                </div>
                <div onClick={groupMessage} className="logout-tab">Group Message</div>
                <div onClick={handleLogout} className="logout-tab">
                    Log out
                </div>
            </div>
            <ChatEngineWrapper>
            <ChatSocket
                height="93vh"
                projectID={projectID}
                userName={user.email}
                userSecret={user.uid}
            />
            <ChatFeed activeChat='123' /> 
             </ChatEngineWrapper>
        </div>
    )
}

export default Chats;
