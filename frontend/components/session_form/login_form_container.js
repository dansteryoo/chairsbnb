import { connect } from 'react-redux';
import { login } from '../../actions/sessions_action';
import LogInForm from './login_form';


const mapStateToProps = (state) => ({
    contentForm: {
        username: '',
        password: ''
    }, 
    formType: 'Log In',
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
