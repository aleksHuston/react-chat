import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';   
import WellcomePage from '../components/WellcomePage';
import {signup, login} from '../actions';



const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => 
bindActionCreators ({
    signup,
    login,
}, dispatch, );


export default connect (
    mapStateToProps,
    mapDispatchToProps
)(WellcomePage);