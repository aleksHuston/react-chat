import React from 'react';
import Sidebar from './Sidebar'
import ChatHeader from './ChatHeader';
import Chat from './Chat';


class ChatPage extends React.Component {
    componentDidMount() {
        const {fetchAllChats, fetchMyChats, setActiveChat, match} = this.props;

        Promise.all([
            fetchAllChats (),
            fetchMyChats ()
        ])

        .then (() => {
            if (match.params.chatId) {
                setActiveChat(match.params.chatId);
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        const { match: { params }, setActiveChat } = this.props;
        const { params: nextParams } = nextProps.match;
    
        if (nextParams.chatId && params.chatId !== nextParams.chatId) {
          setActiveChat(nextParams.chatId);
        }   
      }

    render () {
        const {chats, logout, activeUser, editUser, 
            leaveChat, deleteChat, createChat, 
            joinChat,messages} = this.props;
        return (
            <React.Fragment>
                <ChatHeader 
                    activeUser = {activeUser}
                    editUser={editUser}
                    activeChat = {chats.active}
                    logout={logout}
                    leaveChat={leaveChat}
                    deleteChat={deleteChat} />
                <Sidebar 
                    chats = {chats} 
                    createChat = {createChat} />  
                <Chat 
                    messages = {messages}
                    joinChat = {joinChat}
                    activeChat = {activeUser}
                    activeUser = {activeUser} />
            </React.Fragment>
        );
    }
};

export default ChatPage;