import {BenchConstants} from '../actions/bench_actions';
import {receiveBenches} from '../actions/bench_actions';
import {fetchBenches} from '../util/bench_api_util';

const BenchesMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case BenchConstants.REQUEST_BENCHES:
      var filters = getState().filters;
      const success = (data) => dispatch(receiveBenches(data));
      fetchBenches(filters, success);
      return next(action);
    default:
      return next(action);
  }
};

export default BenchesMiddleware;
