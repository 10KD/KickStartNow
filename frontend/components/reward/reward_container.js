import {connect} from 'react-redux';
import {createBacking} from '../../actions/backing_actions';
import RewardShow from './reward_show';

const mapDispatchToProps = (dispatch) => ({
  createBacking: backing => dispatch(createBacking(backing))
});

export default connect(
  null,
  mapDispatchToProps
)(RewardShow);
