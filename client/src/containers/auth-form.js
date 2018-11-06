import { connect } from 'react-redux';
import { registerUser } from '../data/actions/auth';
import AuthForm from '../components/auth-form';

const mapStateToProps = state => ({
  ...state.auth
});

const mapDispatchToProps = dispatch => ({
  registerUser: values => dispatch(registerUser(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
