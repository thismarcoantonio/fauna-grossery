import { connect } from 'react-redux';
import Router from 'app/client/router';
import { getToken } from '../data/actions/router';

const mapStateToProps = state => ({
  ...state.router
});

const mapDispatchToProps = dispatch => ({
  getToken: () => dispatch(getToken())
});

export default connect(mapStateToProps, mapDispatchToProps)(Router);
