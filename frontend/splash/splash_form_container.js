import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';
import SplashForm from './splash_form';

const mapStateToProps = (state) => ({
    errors: state.errors
});


const mapDispatchToProps = (dispatch) => ({
    clearErrors: () => dispatch(clearErrors())
});


export default connect(mapStateToProps, mapDispatchToProps)(SplashForm);

