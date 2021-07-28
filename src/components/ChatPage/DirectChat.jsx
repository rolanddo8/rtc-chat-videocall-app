import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../../firebase';
import  getOrCreateChat  from './actions/chats/getOrCreateChat';
import { useAuth } from '.././../contexts/AuthContext';
import axios from 'axios';
import ChatHeader from './ChatComponents/ChatEngine/ChatFeed/ChatHeader/index'
import ChatCard from './ChatComponents/ChatEngine/ChatList/'
import {Input} from 'antd';
import 'antd/dist/antd.css';

const projectID = "174f7507-2e8c-4460-95e8-b6b74586d48a";


const Chats = () => {
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const { user } = useAuth();
    const {Search} = Input;

    const [username, setUsername] = useState('')

    function createDirectChat(creds) {
        getOrCreateChat(
            creds,
            { is_direct_chat: true, usernames: [username] },
            () => setUsername('')
        )
    }
    
    function renderChatForm(creds) {
        return (
            <div>
                <Search placeholder="enter email" onChange={(e) => setUsername(e.target.value)} onSearch={() => createDirectChat(creds)} enterButton />

            </div>
        )
    }
    const renderNewChatHeader = (chat) =>{
        return (
            <>
                 <ChatHeader/>
            </>
        )
    }
    const renderNewChatCard = (chat) => {
        return (
            <>
                <ChatCard/>
            </>
        )
    }
    const handleLogout = async () => {
        await auth.signOut();

        history.push('/');
    };


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
                       RTC Chat App 
                </div>
                {/* <div onClick={groupMessage} className="logout-tab">Group Message</div> */}
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>
            <ChatEngine
                height="93vh"
                projectID={projectID}
                userName={user.email}
                userSecret={user.uid}
                renderNewChatForm={(creds) => renderChatForm(creds)}
                renderChatHeader={(chat) => renderNewChatHeader(chat)}
                rederChatCard={(chat) => renderNewChatCard(chat)}
            />
        </div>
    )
}

export default Chats;
