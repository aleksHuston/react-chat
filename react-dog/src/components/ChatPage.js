import React from 'react';
import { messages } from '../mock-data';
import Sidebar from './Sidebar'
import ChatHeader from './ChatHeader';
import Chat from './Chat';


class ChatPage extends React.Component {
    componentDidMount() {
        const {fetchAllChats, fetchMyChats} = this.props;

        Promise.all([
            fetchAllChats (),
            fetchMyChats ()
        ]);
    }

    render () {
        const {chats} = this.props;
        return (
            <div>
                <ChatHeader />
                <Sidebar chats = {chats} />  
                <Chat messages = {messages} />
            </div>
        );
    }
};

export default ChatPage;