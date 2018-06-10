import React from 'react';
import Sidebar from './Sidebar'
import ChatHeader from './ChatHeader';
import Chat from './Chat';
import ErrorMessage from './ErrorMessage';


class ChatPage extends React.Component {
    componentDidMount() {
        const {fetchAllChats, fetchMyChats, setActiveChat, match, socketConnect, mountChat} = this.props;

        Promise.all([
            fetchAllChats (),
            fetchMyChats ()
        ])

        .then (() => {
            socketConnect();
        })

        .then (() => {
            const {chatId} = match.params;
            if (chatId) {
                setActiveChat(chatId);
                mountChat(chatId);
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        const { match: { params }, setActiveChat, unmountChat, mountChat} = this.props;
        const { params: nextParams } = nextProps.match;
    
        if (nextParams.chatId && params.chatId !== nextParams.chatId) {
          setActiveChat(nextParams.chatId);
          unmountChat(params.chatId);
          mountChat(nextParams.chatId);
        }   
      }

    render () {
        const {chats, logout, activeUser, editUser, 
            leaveChat, deleteChat, createChat, 
            joinChat,messages, sendMessage, error, isConnected} = this.props;
        return (
            <React.Fragment>
                <ChatHeader 
                    isConnected = {isConnected}
                    activeUser = {activeUser}
                    editUser={editUser}
                    activeChat = {chats.active}
                    logout={logout}
                    leaveChat={leaveChat}
                    deleteChat={deleteChat} />
                <Sidebar 
                    isConnected = {isConnected}
                    chats = {chats} 
                    createChat = {createChat} />  
                <Chat 
                    isConnected = {isConnected}
                    messages = {messages}
                    joinChat = {joinChat}
                    activeChat = {activeUser}
                    activeUser = {activeUser}
                    sendMessage= {sendMessage} />
                <ErrorMessage error={error} />
            </React.Fragment>
        );
    }
};

export default ChatPage;