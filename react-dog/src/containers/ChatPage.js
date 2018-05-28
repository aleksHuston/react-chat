import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ChatPage from '../components/ChatPage';
import {fetchAllChats, fetchMyChats, setActiveChat} from '../actions/chats';
import * as fromChats from '../reducers/chats';

const mapStateToProps = state => ({
    chats: fromChats.getbyIds(state.chats, state.chats.allIds)
});

const mapDispatchToProps = dispatch => bindActionCreators ({
    fetchAllChats,
    fetchMyChats,
    setActiveChat
}, dispatch);


export default connect (
    mapStateToProps,
    mapDispatchToProps
)(ChatPage);