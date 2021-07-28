import React from 'react';

import LoginPage from './pages/LoginPage';
import ChatPage from './components/ChatPage/DirectChat';
import VideoCallPlayer from './components/VideoCallPage/VideoCall';
import HomePage from './pages/Home';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";


const App = () => {
    return (
        <div>
            <Router>
            <AuthProvider>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/login" component={LoginPage} />
                        <Route exact path="/chat" component={ChatPage} />
                        <Route exact path="/videocall" component={VideoCallPlayer} />
                    </Switch>
                </AuthProvider>

            </Router>
        </div>
    )
}

export default App;