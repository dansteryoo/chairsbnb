import { connect } from 'react-redux';
import { signup } from '../../actions/sessions_action';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
    contentForm: {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        imageUrl: ''
    },
    formType: 'Sign Up',
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
