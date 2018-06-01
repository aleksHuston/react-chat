import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ChatPage from '../components/ChatPage';
import {fetchAllChats, fetchMyChats, setActiveChat, createChat, joinChat, leaveChat, deleteChat} from '../actions/chats';
import * as fromChats from '../reducers/chats';
import {logout} from '../actions/auth'; 
import {editUser} from '../actions/users';
import * as fromState from '../reducers';

const mapStateToProps = state => {
    const activeChat = fromChats.getById(state.chats, state.chats.activeId);
  
    return {
        isAuthenticated: state.auth.isAuthenticated,
        chats: {
            active: activeChat,
            my: fromChats.getByIds(state.chats, state.chats.myIds),
            all: fromChats.getByIds(state.chats, state.chats.allIds),
        },
        activeUser: {
            ...state.auth.user,
            isMember: fromState.isMember(state, activeChat),
            isCreator: fromState.isCreator(state, activeChat),
            isChatMember: fromState.isChatMember(state, activeChat),
        },
        messages: state.messages,
    };
}

const mapDispatchToProps = dispatch => bindActionCreators ({
    fetchAllChats,
    fetchMyChats,
    setActiveChat,
    createChat,
    joinChat,
    leaveChat,
    deleteChat,
    editUser,
    logout,
}, dispatch);


export default connect (
    mapStateToProps,
    mapDispatchToProps
)(ChatPage);